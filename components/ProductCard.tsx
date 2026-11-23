import Image from "next/image";
import { waLink, type Product } from "@/lib/site";

/** Simple, text-led product card. Products with a photo render as a wide card (photo left, text right). */
export default function ProductCard({ p }: { p: Product }) {
  return (
    <article className={`flex h-full flex-col border border-line bg-white ${p.image ? "sm:col-span-2 sm:flex-row" : ""}`}>
      {p.image && (
        <div className="relative aspect-[4/3] shrink-0 overflow-hidden border-b border-line bg-leaf-50 sm:aspect-auto sm:min-h-[260px] sm:w-[45%] sm:border-b-0 sm:border-r">
          <Image
            src={p.image}
            alt={`${p.name} — ${p.category}`}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
            className="object-cover"
          />
          <span className="absolute left-4 top-4 bg-white px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-saffron-600">New</span>
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[11px] uppercase tracking-[0.2em] text-leaf-500">{p.category}</p>
        <h3 className="mt-3 text-xl leading-snug text-leaf-900">{p.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">{p.desc}</p>
        <p className="mt-4 text-xs text-ink/45">{p.tags.join(" · ")}</p>
        <a
          href={waLink(`Hello Maharshi Organics! I'd like to know the price and availability of: ${p.name}`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 border-t border-line pt-4 text-sm font-medium text-leaf-800 transition-colors hover:text-saffron-600"
        >
          Enquire on WhatsApp →
        </a>
      </div>
    </article>
  );
}
