import { NextResponse } from 'next/server';
import { site } from '@/content/site';

interface ContactPayload {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  message?: string;
  company_url?: string;
}

export async function POST(req: Request) {
  console.log('[contact] received');

  let payload: ContactPayload;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  // Honeypot — bots fill all inputs, real users don't see this one.
  if (payload.company_url) {
    console.log('[contact] honeypot triggered');
    return NextResponse.json({ ok: true });
  }

  if (!payload.email || !payload.name || !payload.message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const to = process.env.CONTACT_TO_EMAIL || site.contact.email;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.log('[contact] RESEND_API_KEY not set — logging payload instead of sending', {
      to,
      from: payload.email,
      name: payload.name,
    });
    return NextResponse.json({ ok: true, mode: 'no-send' });
  }

  try {
    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `${site.name} Site <noreply@sp-sa.net>`,
      to: [to],
      replyTo: payload.email,
      subject: `Contact: ${payload.name} — ${payload.company ?? 'no company'}`,
      text: [
        `Name: ${payload.name}`,
        `Company: ${payload.company ?? '—'}`,
        `Email: ${payload.email}`,
        `Phone: ${payload.phone ?? '—'}`,
        '',
        'Message:',
        payload.message,
      ].join('\n'),
    });
    if (error) {
      console.error('[contact] resend error', error);
      return NextResponse.json({ error: 'Email failed' }, { status: 500 });
    }
    console.log('[contact] sent');
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] handler error', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
