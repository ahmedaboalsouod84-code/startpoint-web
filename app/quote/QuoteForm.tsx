'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';

const services = [
  'Exhibition booth',
  'Custom stand',
  'Custom fabrication',
  'Packaging',
  'Branded installation',
  'Event activation',
  '3D visualisation',
  'Branding',
  'Consulting',
  'Other',
];

const budgets = [
  'Under SAR 100,000',
  'SAR 100K – 300K',
  'SAR 300K – 800K',
  'SAR 800K – 2M',
  'SAR 2M+',
  'Not sure yet',
];

const timeframes = [
  'Within 4 weeks',
  '4–8 weeks',
  '2–3 months',
  '3–6 months',
  '6 months+',
  'Flexible',
];

export function QuoteForm() {
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
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Unable to send');
      router.push('/thank-you?from=quote');
    } catch {
      setError('Something went wrong sending your brief. Please email us directly.');
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-x-12 gap-y-10 lg:grid-cols-2">
      <input type="text" name="company_url" tabIndex={-1} autoComplete="off" className="hidden" />

      <Field label="Your name" name="name" required />
      <Field label="Company" name="company" required />
      <Field label="Work email" name="email" type="email" required />
      <Field label="Phone" name="phone" type="tel" />

      <Select label="Service needed" name="service" options={services} required />
      <Select label="Budget range" name="budget" options={budgets} required />
      <Select label="Timeframe" name="timeframe" options={timeframes} required />
      <Field label="Show or event (if applicable)" name="event" />

      <div className="lg:col-span-2">
        <Textarea label="Project brief — what are you building, where, why?" name="brief" rows={6} required />
      </div>

      {error && <p className="text-[0.875rem] text-copper lg:col-span-2">{error}</p>}

      <div className="flex flex-col items-start gap-3 lg:col-span-2">
        <Button type="submit" size="lg" disabled={submitting}>
          {submitting ? 'Sending…' : 'Send the brief'}
        </Button>
        <p className="text-[0.75rem] text-ink-quiet">
          We respond within 24 hours. By submitting you agree to our basic project brief policy.
        </p>
      </div>
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
        className="mt-3 block w-full border-b border-line-strong bg-transparent px-0 py-3 text-[0.9375rem] text-ink focus:border-copper focus:outline-none"
      />
    </label>
  );
}

function Select({ label, name, options, required }: { label: string; name: string; options: string[]; required?: boolean }) {
  return (
    <label className="block">
      <span className="label-eyebrow block text-ink-quiet">
        {label}
        {required && <span className="ml-1 text-copper">*</span>}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="mt-3 block w-full appearance-none border-b border-line-strong bg-transparent px-0 py-3 text-[0.9375rem] text-ink focus:border-copper focus:outline-none"
      >
        <option value="" disabled className="bg-base text-ink">Select…</option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-base text-ink">{o}</option>
        ))}
      </select>
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
        className="mt-3 block w-full resize-none border-b border-line-strong bg-transparent px-0 py-3 text-[0.9375rem] text-ink focus:border-copper focus:outline-none"
      />
    </label>
  );
}
