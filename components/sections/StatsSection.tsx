const commitments = [
  ["Clear scope", "Know what is included before work begins."],
  ["Your accounts", "Keep control of your domain, hosting, and website."],
  ["Personal support", "Get a walkthrough and practical guidance at handoff."]
];

export function StatsSection() {
  return <section aria-label="What you can expect" className="relative py-10">
    <div className="mx-auto grid w-[min(1100px,calc(100%-2rem))] gap-4 sm:grid-cols-3">
      {commitments.map(([title, text]) => <div key={title} className="liquid-glass rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-body">{title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-body/70">{text}</p>
      </div>)}
    </div>
  </section>;
}
