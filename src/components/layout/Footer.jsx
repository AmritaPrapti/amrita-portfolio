import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="pb-28">
      <Container>
        <Reveal>
          <p className="text-xs tracking-[0.2em] text-muted">CONTACT</p>
          <div className="mt-4 h-px w-full bg-line" />
        </Reveal>

        <div className="mt-16 max-w-[820px]">
          <Reveal delay={80}>
            <h2 className="text-3xl font-medium text-foreground">
              Let’s work together.
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-4 text-base leading-relaxed text-muted">
              I’m open to remote and freelance opportunities — especially Shopify
              and frontend work focused on performance, UX, and maintainability.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="mailto:amritapprapti@gmail.com"
                className="rounded-full bg-foreground px-6 py-2 text-sm font-medium text-background transition hover:opacity-90"
              >
                Email Me
              </a>

              <a
                href="/Amrita_Pritom_Prapti.pdf"
                download
                className="rounded-full border border-line px-6 py-2 text-sm text-muted transition hover:text-foreground hover:border-foreground"
              >
                Download Résumé
              </a>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              <a
                className="underline underline-offset-4 decoration-transparent transition hover:text-foreground hover:decoration-foreground"
                href="https://github.com/AmritaPrapti"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                className="underline underline-offset-4 decoration-transparent transition hover:text-foreground hover:decoration-foreground"
                href="https://www.linkedin.com/in/amrita-pritom-prapti-a58263157/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            {/* Footer */}
            <div className="mt-20 border-t border-line pt-6">
              <p className="text-xs text-muted">
                © {new Date().getFullYear()} Amrita Pritom Prapti. Built with
                Next.js and Tailwind.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
