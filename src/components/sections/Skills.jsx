import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";

const skillGroups = [
  {
    title: "Frontend (Primary)",
    items: [
      "JavaScript",
      "Vue.js · Nuxt.js",
      "React.js · Next.js",
      "Component Architecture",
      "Performance Optimization",
      "Accessibility & UI Quality",
    ],
  },
  {
    title: "Shopify & Commerce",
    items: [
      "Shopify Plus · Liquid",
      "Shopify Admin & Storefront APIs",
      "Custom App & Third-party App Integration",
      "Metafields · Metaobjects",
      "Checkout Logic & Cart Rules",
      "Subscriptions & CRO-driven UI",
    ],
  },
  {
    title: "Backend (Working Knowledge)",
    items: [
      "Node.js",
      "REST APIs",
      "PostgreSQL · MongoDB",
      "Auth & API Integration",
    ],
  },
  {
    title: "Cloud & DevOps (Familiarity)",
    items: ["AWS (S3, EC2, Lambda)", "Docker", "GitHub Actions", "Deployments"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="pb-28">
      <Container>
        <Reveal>
        <p className="text-xs tracking-[0.2em] text-muted">SKILLS</p>
        <div className="mt-4 h-px w-full bg-line" />
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {skillGroups.map((g, idx) => (
            <Reveal key={g.title} delay={idx * 80}>
            <div
              key={g.title}
              className="rounded-2xl border border-line bg-panel/40 p-6"
            >
              <h3 className="text-base font-medium text-foreground">
                {g.title}
              </h3>

              <ul className="mt-4 space-y-2 text-sm text-muted">
                {g.items.map((item) => (
                  <li key={item} className="relative pl-5">
                    <span className="absolute left-0 top-[0.55rem] h-1 w-1 rounded-full bg-line" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
