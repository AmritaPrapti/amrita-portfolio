import Container from "./Container";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/70 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#" className="text-sm tracking-wide text-foreground">
          AMRITA PRITOM PRAPTI
        </a>

        <nav className="hidden gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted hover:text-foreground transition"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="text-sm text-foreground border border-line px-3 py-1.5 rounded-full hover:border-foreground transition"
        >
          Hire Me
        </a>
      </Container>
    </header>
  );
}
