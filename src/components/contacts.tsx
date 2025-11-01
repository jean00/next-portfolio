"use client";

import SectionWrapper from "@/wrapper/section-wrapper";
import React, { useState } from "react";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldError,
} from "@/components/ui/field";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Mail, Linkedin, Github, Send, Check } from "lucide-react";
import type { ContactFormData, ContactFormErrors } from "@/types";

const Contacts = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: ContactFormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", formData);

      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error("Form submission error:", error);
      setErrors({ message: "Failed to send message. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
    setIsSubmitted(false);
  };
  return (
    <>
      <h2 className="text-4xl font-bold mb-4">
        Let&apos;s{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Connect
        </span>
      </h2>
      <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 mb-10">
        I&apos;m always open to new opportunities, collaborations. Drop me a
        message or find me on one of my social channels below
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-md bg-card p-8 rounded-2xl shadow-md mb-6"
      >
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Your Name *</FieldLabel>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                  aria-invalid={!!errors.name}
                  required
                />
                {errors.name && <FieldError>{errors.name}</FieldError>}
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Your Email *</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  aria-invalid={!!errors.email}
                  required
                />
                {errors.email && <FieldError>{errors.email}</FieldError>}
              </Field>
              <Field>
                <FieldLabel htmlFor="message">Your Message *</FieldLabel>
                <Textarea
                  placeholder="Type your message here..."
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  aria-invalid={!!errors.message}
                  rows={4}
                  required
                />
                {errors.message && <FieldError>{errors.message}</FieldError>}
              </Field>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <Button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className="flex items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Sending...
                </>
              ) : isSubmitted ? (
                <>
                  <Check className="h-4 w-4" />
                  Sent!
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
            <Button variant="outline" type="button" onClick={resetForm}>
              Reset
            </Button>
          </Field>
        </FieldGroup>
      </form>
      <Button className="mb-6" variant="outline" type="button">
        Download CV
      </Button>
      <div className="flex gap-8 flex-wrap justify-center">
        <a
          href="mailto:jeanlouis433@gmail.com"
          className="flex items-center gap-2 text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 transition"
        >
          <Mail className="w-5 h-5" /> jeanlouis433@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/jean-mosquera-escobar-6632b71ab"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 transition"
        >
          <Linkedin className="w-5 h-5" /> Linkedin
        </a>
        <a
          href="https://github.com/jean00"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 transition"
        >
          <Github className="w-5 h-5" /> GitHub
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(Contacts, "contacts");
