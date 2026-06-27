"use client";

import { useReducer } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { toast } from "sonner";
import type { ContactFormData, ContactFormErrors } from "@/types";

type FormStatus = "idle" | "submitting" | "submitted";

interface FormState {
  data: ContactFormData;
  errors: ContactFormErrors;
  status: FormStatus;
}

type FormAction =
  | { type: "SET_FIELD"; field: keyof ContactFormData; value: string }
  | { type: "SET_ERRORS"; errors: ContactFormErrors }
  | { type: "SUBMIT_START" }
  | { type: "SUBMIT_SUCCESS" }
  | { type: "SUBMIT_ERROR" }
  | { type: "RESET" };

const initialState: FormState = {
  data: { name: "", email: "", message: "" },
  errors: {},
  status: "idle",
};

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        data: { ...state.data, [action.field]: action.value },
        errors: { ...state.errors, [action.field]: undefined },
      };
    case "SET_ERRORS":
      return { ...state, errors: action.errors };
    case "SUBMIT_START":
      return { ...state, status: "submitting" };
    case "SUBMIT_SUCCESS":
      return { ...initialState, status: "idle" };
    case "SUBMIT_ERROR":
      return { ...state, status: "idle" };
    case "RESET":
      return initialState;
    default:
      // istanbul ignore next -- unreachable: TypeScript discriminated union exhausts all cases
      return state;
  }
}

function validateForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required";
  } else if (data.message.trim().length < 5) {
    errors.message = "Message must be at least 5 characters long";
  }

  return errors;
}

export function useContactForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { data: formData, errors, status } = state;
  const isSubmitting = status === "submitting";
  const isSubmitted = status === "submitted";

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    dispatch({
      type: "SET_FIELD",
      field: name as keyof ContactFormData,
      value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const newErrors = validateForm(formData);
    if (Object.keys(newErrors).length > 0) {
      dispatch({ type: "SET_ERRORS", errors: newErrors });
      return;
    }

    dispatch({ type: "SUBMIT_START" });

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        cache: "no-cache",
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: "New Contact Form Submission",
          message: formData.message,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) throw new Error("Server error");

      dispatch({ type: "SUBMIT_SUCCESS" });
      toast("Email sent!", {
        description: "I will get back to you as soon as possible.",
      });
    } catch {
      dispatch({ type: "SUBMIT_ERROR" });
      toast("Oops!", {
        description: "Something went wrong. Please try again later.",
      });
    }
  };

  const resetForm = () => dispatch({ type: "RESET" });

  return {
    formData,
    errors,
    isSubmitting,
    isSubmitted,
    handleInputChange,
    handleSubmit,
    resetForm,
  };
}
