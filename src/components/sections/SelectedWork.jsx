import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";

const projects = [
  {
    title: "Athletes Thread",
    meta: "Shopify Plus · 150k+ Products",
    description:
      "Built and scaled a Shopify Plus storefront handling a large product catalog with complex data structures. Designed metafields and metaobjects architecture and implemented a custom filtering app to improve product discoverability and frontend performance at scale.",
    href: "https://athletesthread.com/",
    linkLabel: "View store →",
  },
  {
    title: "Happy Campers GF",
    meta: "Shopify · Checkout & CRO Logic",
    description:
      "Implemented custom checkout enforcement and cart rules to control purchase flow based on business requirements. Improved conversion reliability by reducing invalid checkouts and guiding users through a controlled funnel.",
    href: "https://happycampersgf.com/",
    linkLabel: "View store →",
  },
  {
    title: "TaskGrid",
    meta: "Task Management System · Linear-inspired",
    description:
      "Designed and developed a task management system inspired by Linear, focusing on fast interactions, clear task workflows, and scalable frontend architecture. Built reusable components and optimized state management for smooth performance with growing datasets.",
    href: "https://taskgrid.io/",
    linkLabel: "View product →",
    note: "App available after login.",
  },
  {
    title: "Pengine",
    meta: "Seller & Admin Dashboard",
    description:
      "Developed seller and admin dashboards for managing products, orders, and operational workflows. Focused on building maintainable UI architecture, data-driven interfaces, and efficient user flows for internal tools.",
    href: "https://pengine.io/",
    linkLabel: "View product →",
    note: "Dashboard available after login.",
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="pb-28">
      <Container>
        {/* Section header */}
        <Reveal>
          <p className="text-xs tracking-[0.2em] text-muted">SELECTED WORK</p>
          <div className="mt-4 h-px w-full bg-line" />
        </Reveal>

        {/* Projects */}
        <div className="mt-16 space-y-16">
          {projects.map((project, idx) => (
            <Reveal key={project.title} delay={idx * 80}>
              <div key={project.title} className="max-w-[820px]">
                <h3 className="text-2xl font-medium text-foreground">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm text-muted">{project.meta}</p>

                <p className="mt-4 text-base leading-relaxed text-muted">
                  {project.description}
                </p>

                {/* Link + note */}
                {project.href ? (
                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-muted underline underline-offset-4 decoration-transparent transition hover:text-foreground hover:decoration-foreground"
                    >
                      {project.linkLabel ?? "View project →"}
                    </a>

                    {project.note ? (
                      <span className="text-xs text-muted">{project.note}</span>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom line */}
        <p className="mt-20 max-w-[820px] text-sm text-muted">
          Additional Shopify and frontend projects are available upon request.
        </p>
      </Container>
    </section>
  );
}
