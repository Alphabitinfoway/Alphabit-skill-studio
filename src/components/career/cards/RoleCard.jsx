"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { API_BASE_URL } from "@/config/api";

export default function RoleCard({ card }) {
  const [isApplying, setIsApplying] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [portalReady, setPortalReady] = useState(false);

  useEffect(() => {
    setPortalReady(true);
  }, []);

  useEffect(() => {
    if (!isApplying) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isApplying]);

  useEffect(() => {
    if (!successMessage) return;

    const timeoutId = window.setTimeout(() => setSuccessMessage(""), 5000);
    return () => window.clearTimeout(timeoutId);
  }, [successMessage]);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("jobId", card.id ?? card._id);

    try {
      const response = await fetch(`${API_BASE_URL}/api/applications`, {
        method: "POST",
        body: formData,
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.message || "Application could not be submitted.");

      form.reset();
      setIsApplying(false);
      setSuccessMessage(result.message || "Your application has been submitted.");
    } catch (submitError) {
      setMessage(submitError.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <article className="group flex h-full min-h-72 flex-col rounded-2xl border border-gray-200 border-t-4 border-t-[#FF5722] bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
        {card.department && (
          <p className="mb-4 text-xs font-semibold uppercase leading-5 text-[#7143FE]">
            {typeof card.department === "string" ? card.department : card.department.name}
          </p>
        )}
        <h3 className="mb-3 break-words font-cabinet text-xl font-bold leading-snug text-gray-900">
          {card.title}
        </h3>
        {card.description && (
          <p className="text-sm leading-6 text-gray-600">{card.description}</p>
        )}
        <button
          type="button"
          onClick={() => {
            setMessage("");
            setSuccessMessage("");
            setIsApplying(true);
          }}
          className="mt-auto pt-6"
        >
          <span className="inline-flex w-full items-center justify-center rounded-lg bg-[#7143FE] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#5e34dc]">
            Apply for this role
          </span>
        </button>
      </article>

      {isApplying && portalReady && createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/50 p-4"
          onClick={(event) => {
            if (event.target === event.currentTarget) setIsApplying(false);
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape") setIsApplying(false);
          }}
        >
          <div role="dialog" aria-modal="true" aria-labelledby={`apply-title-${card.id ?? card._id}`} className="my-auto max-h-[calc(100dvh-2rem)] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-xl">
            <div className="mb-5 flex items-start justify-between gap-4">
              <h3 id={`apply-title-${card.id ?? card._id}`} className="text-xl font-bold text-gray-900">Apply for {card.title}</h3>
              <button type="button" onClick={() => setIsApplying(false)} aria-label="Close application form" className="text-2xl leading-none text-gray-500 hover:text-gray-900">&times;</button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Name
                <input name="name" required autoComplete="name" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" />
              </label>
              <label className="block text-sm font-medium text-gray-700">
                Email
                <input name="email" type="email" required autoComplete="email" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" />
              </label>
              <label className="block text-sm font-medium text-gray-700">
                Phone
                <input name="phone" type="tel" required autoComplete="tel" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" />
              </label>
              <label className="block text-sm font-medium text-gray-700">
                Cover letter <span className="font-normal text-gray-500">(optional)</span>
                <textarea name="coverLetter" rows="3" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" />
              </label>
              <label className="block text-sm font-medium text-gray-700">
                Resume
                <input name="resume" type="file" accept=".pdf,.doc,.docx" required className="mt-1 block w-full text-sm" />
              </label>
              {message && <p role="status" className="text-sm text-gray-700">{message}</p>}
              <button type="submit" disabled={isSubmitting} className="w-full rounded-lg bg-[#7143FE] px-4 py-2.5 font-medium text-white disabled:opacity-60">
                {isSubmitting ? "Submitting..." : "Submit application"}
              </button>
            </form>
          </div>
        </div>,
        document.body
      )}

      {successMessage && portalReady && createPortal(
        <p role="status" className="fixed left-1/2 top-4 z-[110] -translate-x-1/2 rounded-lg bg-green-700 px-5 py-3 text-center text-sm font-medium text-white shadow-lg">
          {successMessage}
        </p>,
        document.body
      )}
    </>
  );
}