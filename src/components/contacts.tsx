"use client";

import SectionWrapper from "@/wrapper/section-wrapper";
import React from "react";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

const Contacts = () => {
  return (
    <>
      <h2 className="text-4xl font-bold mb-4">
        Let&apos;s <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Connect</span>
      </h2>
      <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 mb-10">
        I&apos;m always open to new opportunities, collaborations. Drop me a message or find me on one of my social channels below
      </p>
      <form className="flex flex-col gap-4 w-full max-w-md bg-white dark:bg-slate-950 p-8 rounded-2xl shadow-md mb-6">
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Your Name</FieldLabel>
                <Input id="name" placeholder="John Doe" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Your email</FieldLabel>
                <Input id="email" placeholder="john.doe@example.com" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="message">Your message</FieldLabel>
                <Textarea placeholder="Type your message here." id="message" />
              </Field>
            </FieldGroup>
            <Field></Field>
          </FieldSet>
          <Field orientation="horizontal">
            <Button type="submit">Submit</Button>
            <Button variant="outline" type="button">
              Cancel
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
