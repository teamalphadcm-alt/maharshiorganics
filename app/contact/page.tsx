import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { ContactForm, FadeIn, Stagger, StaggerItem } from "@/components/client";
import { SITE, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us — Visit Our Rajajinagar Store",
  description: `Contact Maharshi Organics: call ${SITE.phoneDisplay}, message us on WhatsApp, or visit our store near Bhasyam Circle, next to A2B, Rajajinagar, Bengaluru 560010.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const cards = [
    { t: "Call us", v: SITE.phoneDisplay, href: SITE.phoneHref, cta: "Call now" },
    { t: "WhatsApp", v: SITE.phoneDisplay, href: waLink(), cta: "Start chat" },
    { t: "Visit us", v: "Near Bhasyam Circle, next to A2B", href: SITE.mapsLink, cta: "Get directions" },
  ];

  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Get in touch"
        title="We'd love to hear from you."
        subtitle="Call, WhatsApp or drop by our store in Rajajinagar — we're happy to help you go organic."
      />

      <section className="container-x py-16">
        <Stagger className="grid border-l border-t border-line md:grid-cols-3">
          {cards.map(({ t, v, href, cta }) => (
            <StaggerItem key={t} className="border-b border-r border-line">
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex h-full flex-col bg-white p-8 transition-colors hover:bg-leaf-50"
              >
                <p className="text-[11px] uppercase tracking-[0.22em] text-saffron-600">{t}</p>
                <p className="mt-4 flex-1 font-display text-2xl text-leaf-900">{v}</p>
                <span className="mt-6 text-sm font-medium text-leaf-800 underline decoration-leaf-300 underline-offset-[6px] group-hover:decoration-leaf-800">{cta}</span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="container-x grid gap-12 pb-24 lg:grid-cols-5">
        <FadeIn className="lg:col-span-3">
          <p className="eyebrow">Send a message</p>
          <h2 className="heading-lg mt-4">Tell us what you need</h2>
          <p className="mt-3 text-ink/60">Fill this in and it&apos;ll open as a ready-to-send WhatsApp message.</p>
          <div className="mt-10">
            <ContactForm />
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="flex flex-col gap-8 lg:col-span-2">
          <div className="border border-line">
            <iframe title="Maharshi Organics location map" src={SITE.mapsEmbed} className="h-72 w-full border-0 grayscale-[35%]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.22em] text-ink/45">Store address</h3>
              <address className="mt-3 space-y-1 not-italic leading-relaxed text-ink/70">
                {SITE.addressLines.map((l) => (
                  <p key={l}>{l}</p>
                ))}
              </address>
            </div>
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.22em] text-ink/45">Store timings</h3>
              <p className="mt-3 text-ink/70">Please call ahead to confirm today&apos;s timings.</p>
            </div>
            <div className="flex gap-6 text-sm">
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="link-quiet">Instagram</a>
              <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="link-quiet">Facebook</a>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
