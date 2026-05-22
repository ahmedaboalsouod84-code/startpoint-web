import { NextResponse } from 'next/server';
import { site } from '@/content/site';

interface QuotePayload {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  service?: string;
  budget?: string;
  timeframe?: string;
  event?: string;
  brief?: string;
  company_url?: string;
}

export async function POST(req: Request) {
  console.log('[quote] received');

  let payload: QuotePayload;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  if (payload.company_url) {
    console.log('[quote] honeypot triggered');
    return NextResponse.json({ ok: true });
  }

  const required = ['name', 'company', 'email', 'service', 'budget', 'timeframe', 'brief'] as const;
  for (const f of required) {
    if (!payload[f]) return NextResponse.json({ error: `Missing ${f}` }, { status: 400 });
  }

  const to = process.env.CONTACT_TO_EMAIL || site.contact.quote;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.log('[quote] RESEND_API_KEY not set — logging payload instead of sending', {
      to,
      from: payload.email,
      name: payload.name,
      service: payload.service,
    });
    return NextResponse.json({ ok: true, mode: 'no-send' });
  }

  try {
    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `${site.name} Site <noreply@sp-sa.net>`,
      to: [to],
      replyTo: payload.email!,
      subject: `Quote: ${payload.company} — ${payload.service}`,
      text: [
        `New project brief from ${site.url}`,
        '',
        `Name: ${payload.name}`,
        `Company: ${payload.company}`,
        `Email: ${payload.email}`,
        `Phone: ${payload.phone ?? '—'}`,
        '',
        `Service: ${payload.service}`,
        `Budget: ${payload.budget}`,
        `Timeframe: ${payload.timeframe}`,
        `Event: ${payload.event ?? '—'}`,
        '',
        'Brief:',
        payload.brief,
      ].join('\n'),
    });
    if (error) {
      console.error('[quote] resend error', error);
      return NextResponse.json({ error: 'Email failed' }, { status: 500 });
    }
    console.log('[quote] sent');
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[quote] handler error', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
