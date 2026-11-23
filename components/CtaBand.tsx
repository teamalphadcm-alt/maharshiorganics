import { FadeIn } from "./client";
import { SITE, waLink } from "@/lib/site";

export default function CtaBand({ title = "Have a question about a product?", text = "Message us on WhatsApp or call — we're happy to help you choose." }: { title?: string; text?: string }) {
  return (
    <section className="border-t border-line bg-leaf-50">
      <FadeIn className="container-x flex flex-col gap-8 py-20 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <h2 className="heading-lg">{title}</h2>
          <p className="mt-4 text-ink/65">{text}</p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-primary">
            WhatsApp us
          </a>
          <a href={SITE.phoneHref} className="btn-secondary">
            Call {SITE.phoneDisplay}
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
