"use client";

import { useState, type FormEvent } from "react";
import { submitContactForm } from "@/features/contact/contactApi";
import { normalizeError } from "@/utils/normalizeError";
import type { ApiError } from "@/types";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "succeeded" | "failed">("idle");
  const [error, setError] = useState<ApiError | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setStatus("loading");
    setError(null);
    try {
      await submitContactForm({
        name: String(formData.get("name") || ""),
        email: String(formData.get("email") || ""),
        message: String(formData.get("message") || ""),
      });
      setStatus("succeeded");
      form.reset();
    } catch (err) {
      setStatus("failed");
      setError(normalizeError(err));
    }
  }

  if (status === "succeeded") {
    return (
      <div role="status" className="rounded-lg border border-bronze/40 bg-paper/60 p-6 font-sans text-ink">
        Thank you — your message has been received. We&rsquo;ll get back to you soon.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div>
        <label htmlFor="name" className="block font-sans text-sm font-medium text-ink">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-md border border-border bg-white px-4 py-2.5 font-sans text-sm text-ink focus:border-bronze"
        />
      </div>
      <div>
        <label htmlFor="email" className="block font-sans text-sm font-medium text-ink">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-md border border-border bg-white px-4 py-2.5 font-sans text-sm text-ink focus:border-bronze"
        />
      </div>
      <div>
        <label htmlFor="message" className="block font-sans text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1 w-full rounded-md border border-border bg-white px-4 py-2.5 font-sans text-sm text-ink focus:border-bronze"
        />
      </div>

      {status === "failed" && error && (
        <p role="alert" className="font-sans text-sm text-red-700">
          {error.message}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="self-start rounded-full bg-bronze px-6 py-2.5 font-sans text-sm font-semibold text-white transition-colors hover:bg-bronze-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
