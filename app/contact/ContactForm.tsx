'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';

export function ContactForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Unable to send');
      router.push('/thank-you?from=contact');
    } catch {
      setError('Something went wrong sending your message. Please email us directly.');
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot */}
      <input type="text" name="company_url" tabIndex={-1} autoComplete="off" className="hidden" />

      <Field label="Name" name="name" required />
      <Field label="Company" name="company" />
      <Field label="Email" name="email" type="email" required />
      <Field label="Phone" name="phone" type="tel" />
      <Textarea label="How can we help?" name="message" rows={6} required />

      {error && <p className="text-[0.875rem] text-copper">{error}</p>}

      <Button type="submit" size="lg" disabled={submitting}>
        {submitting ? 'Sending…' : 'Send message'}
      </Button>
      <p className="text-[0.75rem] text-ink-quiet">
        We reply within one business day. By submitting you agree to our basic contact policy.
      </p>
    </form>
  );
}

function Field({ label, name, type = 'text', required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="label-eyebrow block text-ink-quiet">
        {label}
        {required && <span className="ml-1 text-copper">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-3 block w-full border-b border-line-strong bg-transparent px-0 py-3 text-[0.9375rem] text-ink placeholder:text-ink-quiet focus:border-copper focus:outline-none"
      />
    </label>
  );
}

function Textarea({ label, name, rows = 4, required }: { label: string; name: string; rows?: number; required?: boolean }) {
  return (
    <label className="block">
      <span className="label-eyebrow block text-ink-quiet">
        {label}
        {required && <span className="ml-1 text-copper">*</span>}
      </span>
      <textarea
        name={name}
        rows={rows}
        required={required}
        className="mt-3 block w-full resize-none border-b border-line-strong bg-transparent px-0 py-3 text-[0.9375rem] text-ink placeholder:text-ink-quiet focus:border-copper focus:outline-none"
      />
    </label>
  );
}
