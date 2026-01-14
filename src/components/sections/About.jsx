import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section id="about" className="pb-28 pt-16">
      <Container>
        <Reveal>
          <div className="max-w-[720px]">
            <p className="text-xs tracking-[0.2em] text-muted">ABOUT</p>

            <div className="mt-4 h-px w-full bg-line" />

            <p className="mt-8 text-lg leading-relaxed text-foreground">
              I’m a Shopify & Frontend Engineer with 4+ years of professional
              experience building high-conversion eCommerce systems and scalable
              frontend architectures.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-muted">
              My work focuses on performance, maintainability, and business
              impact — not visual noise.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
