import Image from "next/image";
import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center">
      <Container className="grid items-center gap-10 py-10 lg:grid-cols-2 lg:py-16">
        {/* Left */}
        <div>
          <h1 className="text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight md:tracking-normal">
            AMRITA
            <br />
            PRITOM
            <br />
            PRAPTI
          </h1>

          <p className="mt-5 max-w-[46ch] text-base leading-relaxed text-muted sm:text-lg">
            Shopify & Frontend Engineer building scalable, performance-driven
            eCommerce systems and maintainable frontend architectures.
          </p>

          {/* CTAs */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center">
            {/* Secondary */}
            <a
              href="#work"
              className="rounded-full border border-line px-5 py-2 text-center text-sm text-foreground transition hover:border-foreground"
            >
              View Work
            </a>

            {/* Primary */}
            <a
              href="#contact"
              className="rounded-full bg-foreground px-6 py-2 text-sm text-center font-medium text-background transition hover:opacity-90"
            >
              Contact
            </a>

            {/* Tertiary (full width on mobile) */}
            <a
              href="/Amrita_Pritom_Prapti_Resume.pdf"
              download
              className="col-span-2 rounded-full border border-line px-5 py-2 text-center text-sm text-muted transition hover:-translate-y-[1px] hover:text-foreground hover:border-foreground sm:col-auto"
            >
              Download Résumé
            </a>
          </div>

          {/* Social */}
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
            <a
              className="transition hover:text-foreground"
              href="https://github.com/AmritaPrapti"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="transition hover:text-foreground"
              href="https://www.linkedin.com/in/amrita-pritom-prapti-a58263157/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="transition hover:text-foreground"
              href="mailto:amritapprapti@gmail.com"
            >
              Email
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="relative">
          <div className="rounded-3xl border border-line bg-panel p-3">
            <div className="relative aspect-[3/4] sm:aspect-[4/5]">
              <Image
                src="/profile.jpg"
                alt="Amrita Pritom Prapti"
                fill
                className="object-cover grayscale"
                priority
              />
            </div>
          </div>

          <p className="mt-3 text-xs text-muted">
            Dhaka, Bangladesh · Open to Remote & Freelance
          </p>
        </div>
      </Container>
    </section>
  );
}
