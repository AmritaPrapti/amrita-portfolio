import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";

const roles = [
  {
    period: "Aug 2021 — Present",
    company: "Genesys Softwares",
    title: "Software Engineer",
    bullets: [
      "Developed and maintained scalable frontend systems and eCommerce solutions using Vue, Nuxt, React, and Node.js.",
      "Implemented performance optimizations and reusable component architecture for production applications.",
      "Collaborated with cross-functional teams to deliver stable, maintainable, business-focused features.",
    ],
  },
  {
    period: "Jan 2019 — Jan 2021",
    company: "BCMC College of Engineering & Technology",
    title: "Lecturer (Computer Science)",
    bullets: [
      "Taught web development fundamentals, programming, and software engineering concepts.",
      "Supervised student projects and mentored learners on practical application development.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="pb-28">
      <Container>
        <Reveal>
          <p className="text-xs tracking-[0.2em] text-muted">EXPERIENCE</p>
          <div className="mt-4 h-px w-full bg-line" />
        </Reveal>

        <div className="mt-16 space-y-14">
          {roles.map((role) => (
            <Reveal key={`${role.company}-${role.period}`}>
              <div
                key={`${role.company}-${role.period}`}
                className="grid gap-6 md:grid-cols-[220px_1fr]"
              >
                {/* Left: Period */}
                <div className="text-sm text-muted">{role.period}</div>

                {/* Right: Role details */}
                <div className="max-w-[820px]">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-medium text-foreground">
                      {role.company}
                    </h3>
                    <p className="text-sm text-muted">{role.title}</p>
                  </div>

                  <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted">
                    {role.bullets.map((b) => (
                      <li key={b} className="relative pl-5">
                        <span className="absolute left-0 top-[0.55rem] h-1 w-1 rounded-full bg-line" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
