import Link from 'next/link';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';

// Placeholder Arabic landing. RTL is on via /app/ar/layout.tsx.
// Arabic copy will be authored in phase 2.
export default function ArHomePage() {
  return (
    <Section pad="lg">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>النسخة العربية &middot; قريباً</Eyebrow>
        <h1 className="display-1 mt-6 text-balance">
          ستارت بوينت
        </h1>
        <p className="body-lg mt-7 text-pretty">
          استوديو إنتاج إبداعي في الرياض. النسخة العربية الكاملة قيد التحضير. للاطلاع
          على أعمالنا الآن، يرجى زيارة الموقع باللغة الإنجليزية.
        </p>
        <div className="mt-10 flex justify-center">
          <Button href="/">View in English</Button>
        </div>
        <p className="mt-12 text-[0.875rem] text-ink-quiet">
          <Link href="/contact" className="hover:text-copper">للتواصل المباشر مع الاستوديو</Link>
        </p>
      </div>
    </Section>
  );
}
