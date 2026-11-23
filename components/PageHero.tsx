import Link from "next/link";
import { FadeIn } from "./client";

export default function PageHero({ eyebrow, title, subtitle, crumb }: { eyebrow: string; title: string; subtitle: string; crumb: string }) {
  return (
    <section className="border-b border-line">
      <div className="container-x pb-16 pt-14 md:pb-24 md:pt-20">
        <FadeIn>
          <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-2 text-xs text-ink/45">
            <Link href="/" className="hover:text-leaf-800">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-ink/70">{crumb}</span>
          </nav>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="heading-xl mt-5 max-w-3xl">{title}</h1>
          <p className="lead mt-6 max-w-2xl">{subtitle}</p>
        </FadeIn>
      </div>
    </section>
  );
}
