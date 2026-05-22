import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center">
      <Container size="tight" className="py-32">
        <Eyebrow>404</Eyebrow>
        <h1 className="display-1 mt-6 text-balance">This page is not on the floor.</h1>
        <p className="body-lg mt-6 max-w-xl">
          The link you followed may be outdated, or this page was never built. Head back to the studio.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/">Back to home</Button>
          <Button href="/work" variant="ghost">See the work</Button>
        </div>
      </Container>
    </section>
  );
}
