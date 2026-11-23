"use client";

import { ReactNode, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, Search } from "lucide-react";
import { CATEGORIES, PRODUCTS, waLink, type Category } from "@/lib/site";
import ProductCard from "./ProductCard";

const ease = [0.22, 1, 0.36, 1] as const;

/* ───────────────────────── Motion helpers (subtle) ───────────────────────── */
export function FadeIn({
  children,
  delay = 0,
  y = 14,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Float({ children, className, delay = 0, distance = 12 }: { children: ReactNode; className?: string; delay?: number; distance?: number }) {
  return (
    <motion.div className={className} animate={{ y: [0, -distance, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}>
      {children}
    </motion.div>
  );
}

export function FloatingLeaf({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.svg
      viewBox="0 0 40 40"
      className={className}
      animate={{ y: [0, -14, 0], rotate: [0, 12, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
      aria-hidden="true"
    >
      <path d="M20 2C8 8 4 22 10 36c14-4 22-16 10-34Z" fill="currentColor" />
      <path d="M10 36C14 24 17 14 20 2" stroke="white" strokeOpacity=".5" strokeWidth="1.2" fill="none" />
    </motion.svg>
  );
}

/* ───────────────────────── Product browser ───────────────────────── */
// Products with a photo (e.g. Urja) have their own spotlight banner above the list, so the grid skips them.
const LISTED = PRODUCTS.filter((p) => !p.image);
const LISTED_CATEGORIES = CATEGORIES.filter((c) => LISTED.some((p) => p.category === c.name));

export function ProductBrowser() {
  const [active, setActive] = useState<Category | "All">("All");
  const [query, setQuery] = useState("");

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return LISTED.filter(
      (p) =>
        (active === "All" || p.category === active) &&
        (!q || p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
    );
  }, [active, query]);

  return (
    <div>
      <div className="flex flex-col gap-6 border-b border-line pb-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="-mx-6 flex gap-6 overflow-x-auto px-6 lg:mx-0 lg:flex-wrap lg:gap-x-6 lg:gap-y-3 lg:px-0">
          {(["All", ...LISTED_CATEGORIES.map((c) => c.name)] as const).map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              aria-pressed={active === c}
              className={`shrink-0 pb-1 text-sm transition-colors ${
                active === c ? "border-b border-leaf-900 text-leaf-900" : "border-b border-transparent text-ink/50 hover:text-leaf-900"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <label className="relative block lg:w-64">
          <Search className="pointer-events-none absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/35" strokeWidth={1.5} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products"
            className="w-full border-0 border-b border-line bg-transparent py-2 pl-7 text-sm outline-none placeholder:text-ink/35 focus:border-leaf-800"
            aria-label="Search products"
          />
        </label>
      </div>

      <p className="mt-6 text-xs uppercase tracking-[0.2em] text-ink/45">
        {list.length} {list.length === 1 ? "product" : "products"}
      </p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <ProductCard key={p.name} p={p} />
        ))}
      </div>

      {list.length === 0 && (
        <div className="border border-line bg-white px-6 py-14 text-center">
          <p className="font-display text-2xl text-leaf-900">Can&apos;t find it here?</p>
          <p className="mt-2 text-ink/60">Our store stocks much more than we list online. Ask us directly.</p>
          <a href={waLink(`Hello! Do you have "${query}" in stock?`)} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6">
            Ask on WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}

/* ───────────────────────── FAQ accordion ───────────────────────── */
export function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q}>
            <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-6 py-5 text-left" aria-expanded={isOpen}>
              <span className={`font-display text-lg transition-colors ${isOpen ? "text-leaf-900" : "text-ink/80"}`}>{it.q}</span>
              {isOpen ? <Minus className="h-4 w-4 shrink-0 text-leaf-800" strokeWidth={1.5} /> : <Plus className="h-4 w-4 shrink-0 text-ink/40" strokeWidth={1.5} />}
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease }}>
                  <p className="max-w-2xl pb-6 leading-relaxed text-ink/65">{it.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

/* ───────────────────────── Contact form → WhatsApp ───────────────────────── */
export function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", interest: "General enquiry", message: "" });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Maharshi Organics!\n\nName: ${form.name}\nPhone: ${form.phone}\nInterested in: ${form.interest}\n\n${form.message}`;
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
  };

  const field = "w-full rounded-sm border border-line bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-leaf-800";
  const label = "mb-2 block text-xs uppercase tracking-[0.15em] text-ink/55";

  return (
    <form onSubmit={submit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className={label}>Your name *</span>
          <input required value={form.name} onChange={set("name")} className={field} placeholder="e.g. Lakshmi" />
        </label>
        <label className="block">
          <span className={label}>Phone number *</span>
          <input required type="tel" pattern="[0-9+ ]{10,15}" value={form.phone} onChange={set("phone")} className={field} placeholder="98XXXXXXXX" />
        </label>
      </div>
      <label className="block">
        <span className={label}>I&apos;m interested in</span>
        <select value={form.interest} onChange={set("interest")} className={field}>
          <option>General enquiry</option>
          {CATEGORIES.map((c) => (
            <option key={c.name}>{c.name}</option>
          ))}
          <option>Bulk / monthly grocery order</option>
        </select>
      </label>
      <label className="block">
        <span className={label}>Message</span>
        <textarea rows={5} value={form.message} onChange={set("message")} className={field} placeholder="Tell us what you're looking for…" />
      </label>
      <button type="submit" className="btn-primary w-full">
        Send via WhatsApp
      </button>
      <p className="text-center text-xs text-ink/45">Your message opens in WhatsApp — we usually reply quickly during store hours.</p>
    </form>
  );
}
