import { ArrowUpRight } from "lucide-react";
const services = [
  ["01", "A better first impression.", "Web design & development", "A distinctive website that makes your offer clear, feels great on mobile, and gives customers a reason to get in touch."],
  ["02", "Make what you have work harder.", "Website improvements", "From awkward navigation to broken enquiry flows, we identify the friction and make focused improvements to your existing site."],
  ["03", "Less busywork. More business.", "AI & connected tools", "Practical tools for visibility, enquiries, and everyday workflows. Start with what helps your business, then build from there."]
];
export function FeaturesSection() {
  return <section id="features" className="studio-services py-20 sm:py-28"><div className="studio-container"><div className="studio-section-heading"><p className="studio-eyebrow">01 / What we do</p><h2 className="font-serif-display">Good design.<br /><em>Real-world purpose.</em></h2><p>From your first website to your next chapter. Clear scope, considered design, and support from a real person.</p></div><div className="mt-12">{services.map(([number, title, category, description]) => <a href="#contact" key={number} className="service-row group"><span className="studio-eyebrow text-body/50">{number}</span><div><p className="studio-eyebrow mb-3 text-body/60">{category}</p><h3 className="text-2xl font-medium tracking-tight sm:text-3xl">{title}</h3></div><p className="text-sm leading-7 text-body/65">{description}</p><ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" /></a>)}</div></div></section>;
}
