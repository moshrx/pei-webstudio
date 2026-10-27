import { AlertTriangle, Mail, MapPin, PhoneCall, Star } from "lucide-react";

import type { DemoBusiness } from "./data";

export function BadDemoSite({ business }: { business: DemoBusiness }) {
  const badColor = `rgb(${business.colors.badPrimary})`;
  const warningColor = `rgb(${business.colors.badSecondary})`;

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#eeeeee] pb-28 font-[Arial] text-[#111]">
      <div
        className="animate-pulse border-y-4 border-black px-3 py-2 text-center text-xs font-black uppercase tracking-widest text-black"
        style={{ backgroundColor: warningColor }}
      >
        {business.demoNotice}
      </div>

      <header className="mx-auto mt-4 w-[min(1180px,calc(100%-1rem))] border-4 border-double border-blue-900 bg-white p-3 shadow-[8px_8px_0_rgb(0_0_0/0.25)]">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="inline-block bg-red-600 px-2 py-1 text-[11px] font-bold uppercase text-white">
              Since a long time ago
            </p>
            <h1 className="mt-2 max-w-3xl text-3xl font-black uppercase leading-none text-blue-900 md:text-5xl">
              {business.bad.headline}
            </h1>
          </div>
          <div className="border-2 border-dashed border-red-600 bg-yellow-200 p-2 text-right text-sm font-bold text-red-700">
            <PhoneCall className="ml-auto size-5" aria-hidden="true" />
            CALL NOW
            <br />
            number hidden below
          </div>
        </div>

        <nav className="mt-4 flex flex-wrap gap-1 border-y-2 border-blue-800 bg-blue-100 p-1 text-[11px] font-black uppercase">
          {business.bad.nav.map((item) => (
            <a
              key={item}
              href="#contact"
              className="border border-blue-900 bg-white px-2 py-1 text-blue-900 underline hover:bg-yellow-200"
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      <section className="mx-auto grid w-[min(1180px,calc(100%-1rem))] gap-3 py-4 lg:grid-cols-[1fr_260px]">
        <div className="border-2 border-slate-500 bg-white p-3">
          <div className="grid gap-3 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2
                className="text-2xl font-black uppercase leading-tight md:text-4xl"
                style={{ color: badColor }}
              >
                For all your plumbing needs and many other services we do many things
              </h2>
              <p className="mt-3 max-w-3xl text-[15px] leading-snug">
                {business.bad.intro}
              </p>
              <div className="mt-4 grid gap-2 sm:grid-cols-4">
                {business.bad.buttons.map((button) => (
                  <a
                    key={button}
                    href="#contact"
                    className="border-2 border-black bg-lime-300 px-2 py-2 text-center text-xs font-black uppercase text-blue-900 shadow-[3px_3px_0_rgb(0_0_0/0.35)]"
                  >
                    {button}
                  </a>
                ))}
              </div>
            </div>

            <div className="min-h-[260px] border-4 border-orange-500 bg-[repeating-linear-gradient(45deg,#c7d2fe,#c7d2fe_12px,#fef08a_12px,#fef08a_24px)] p-3">
              <div className="h-full border-2 border-white/70 bg-black/35 p-3 text-white">
                <p className="text-xs font-bold uppercase">Generic photo area</p>
                <div className="mt-16 rotate-[-4deg] bg-white px-3 py-2 text-center text-sm font-black uppercase text-slate-900">
                  pipe image goes here
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {["Leaks", "Water heaters", "Toilets and sinks"].map((item) => (
              <article key={item} className="border border-slate-400 bg-slate-100 p-2">
                <h3 className="text-xl font-black uppercase text-red-700">{item}</h3>
                <p className="mt-1 text-sm leading-tight">
                  We offer this service and many similar services. Contact for more
                  information, pricing, timing, scheduling and general questions.
                </p>
                <a href="#contact" className="mt-3 inline-block text-xs font-bold text-blue-700 underline">
                  tiny details link
                </a>
              </article>
            ))}
          </div>

          <section className="mt-5 border-2 border-purple-700 bg-purple-100 p-3">
            <h2 className="text-2xl font-black uppercase text-purple-900">
              Reviews Testimonials Awards Specials Helpful Information
            </h2>
            <div className="mt-2 grid gap-2 md:grid-cols-2">
              {[1, 2, 3, 4].map((review) => (
                <div key={review} className="bg-white p-2 text-sm leading-tight">
                  <div className="flex text-yellow-500">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="size-4 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  Great plumbing company. This is a fictional review for the demo site only.
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-3">
          <div className="border-4 border-red-600 bg-yellow-200 p-3">
            <AlertTriangle className="size-7 text-red-700" aria-hidden="true" />
            <h2 className="mt-2 text-xl font-black uppercase text-red-700">
              Important!!! Read First
            </h2>
            <p className="text-sm leading-tight">
              We may answer fast. Or not. Fill out the confusing form and maybe someone
              will reply.
            </p>
          </div>
          {business.bad.sidebar.map((item) => (
            <div key={item} className="border-2 border-black bg-white p-2 text-center text-sm font-black uppercase">
              {item}
            </div>
          ))}
        </aside>
      </section>

      <section id="contact" className="mx-auto w-[min(1180px,calc(100%-1rem))] border-4 border-slate-700 bg-white p-3">
        <h2 className="text-3xl font-black uppercase text-blue-900">Contact Us</h2>
        <p className="mt-1 text-sm">{business.bad.notice}</p>
        <form className="mt-3 grid gap-2 md:grid-cols-4" aria-label="Bad demo contact form">
          <input className="border border-slate-500 p-1 text-sm" placeholder="name maybe" />
          <input className="border border-slate-500 p-1 text-sm" placeholder="email or phone" />
          <input className="border border-slate-500 p-1 text-sm" placeholder="problem" />
          <button className="bg-slate-300 p-1 text-xs font-bold uppercase text-slate-600" type="button">
            submit form eventually
          </button>
        </form>
        <div className="mt-3 flex flex-wrap gap-4 text-xs">
          <span className="inline-flex items-center gap-1"><MapPin className="size-3" /> Fictional service area</span>
          <span className="inline-flex items-center gap-1"><Mail className="size-3" /> demo@example.invalid</span>
        </div>
      </section>
    </main>
  );
}
