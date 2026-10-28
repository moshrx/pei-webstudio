
import { SectionGlow } from "@/components/SectionGlow";
import { TechExplanationToggle } from "./TechExplanationToggle";

const whyChoose = [
  {
    title: "Local Context",
    text: "Based in Charlottetown, we understand Atlantic Canadian buying patterns, service businesses, and local search realities."
  },
  {
    title: "Systems Thinking",
    text: "We connect site design, SEO, content, forms, automations, and reporting so the whole customer path works together."
  },
  {
    title: "Practical AI",
    text: "We add AI where it helps with intake, response, content, research, or operations, and avoid it where it creates noise."
  },
  {
    title: "Owner Control",
    text: "You keep control of your accounts, analytics, content, and workflows, with training built into the handoff."
  }
];

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-28">
      <SectionGlow className="right-0 top-0" />

      <div className="relative mx-auto w-[min(1100px,calc(100%-2rem))]">
        <h2
          className="font-serif-display mb-4 text-3xl text-body sm:text-4xl md:text-5xl"
        >
          Your local website partner.
        </h2>
        <p className="mb-12 max-w-2xl text-body/60">
          Based in Charlottetown, we work directly with business owners on new
          websites, practical improvements, and support after launch. You get clear
          explanations and a say in the decisions.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div
          >
            <div className="h-full">
              <div className="liquid-glass h-full rounded-2xl p-8">
                <h3 className="mb-4 text-2xl font-semibold text-body">Our Mission</h3>
                <p className="text-body/70">
                  We build digital systems that make small and mid-sized businesses feel
                  much more capable: faster sites, cleaner customer journeys, smarter
                  follow-up, and better visibility into what is actually working.
                </p>
              </div>
            </div>
          </div>

          <div
          >
            <div className="h-full">
              <div className="liquid-glass h-full rounded-2xl p-8">
                <h3 className="mb-4 text-2xl font-semibold text-body">Our Approach</h3>
                <p className="text-body/70">
                  We pair modern design and engineering with practical operating sense.
                  Every recommendation has to earn its place: if a tool, AI workflow, or
                  integration does not reduce friction or improve growth, it does not go in.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-12"
        >
          <h3 className="mb-6 text-2xl font-semibold text-body">Why Choose Us?</h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item) => (
              <div key={item.title} className="liquid-glass rounded-2xl p-5">
                <h4 className="mb-2 font-semibold text-body">{item.title}</h4>
                <p className="text-sm text-body/60">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="mt-16"
        >
          <details className="liquid-glass rounded-2xl p-6">
          <summary className="cursor-pointer text-lg font-semibold text-body">
            Curious about how we build?
          </summary>
          <p className="mb-8 mt-2 max-w-2xl text-sm text-body/60 sm:text-base">
            We&apos;re transparent about how we build. Here&apos;s what we use and why it
            matters to your bottom line.
          </p>
          <TechExplanationToggle />
          </details>
        </div>
      </div>
    </section>
  );
}
