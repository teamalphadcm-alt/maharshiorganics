"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV, SITE, waLink } from "@/lib/site";

/* ───────────────────────── WhatsApp icon ───────────────────────── */
export function WhatsAppIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.004 3C9.374 3 3.98 8.393 3.98 15.02c0 2.117.553 4.186 1.604 6.01L3.875 27.25l6.37-1.67a12.01 12.01 0 0 0 5.759 1.467h.005c6.628 0 12.02-5.393 12.022-12.02A11.94 11.94 0 0 0 16.004 3Zm0 21.99h-.004a9.97 9.97 0 0 1-5.08-1.39l-.364-.217-3.78.991 1.008-3.686-.237-.378a9.95 9.95 0 0 1-1.528-5.29c.002-5.51 4.487-9.993 10-9.993a9.93 9.93 0 0 1 7.068 2.93 9.93 9.93 0 0 1 2.925 7.07c-.002 5.51-4.487 9.963-9.998 9.963Zm5.484-7.482c-.3-.15-1.777-.877-2.052-.977-.275-.1-.476-.15-.676.15-.2.3-.776.977-.951 1.177-.175.2-.35.226-.65.075-.3-.15-1.267-.467-2.413-1.49-.892-.795-1.494-1.777-1.669-2.077-.175-.3-.019-.462.131-.612.135-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.628-.926-2.229-.244-.585-.492-.506-.676-.515l-.576-.01c-.2 0-.525.075-.8.375-.275.3-1.05 1.026-1.05 2.503 0 1.477 1.075 2.904 1.225 3.104.15.2 2.116 3.231 5.126 4.531.716.309 1.275.494 1.711.632.719.229 1.373.196 1.89.119.577-.086 1.777-.727 2.027-1.428.25-.7.25-1.302.175-1.427-.075-.125-.275-.2-.575-.35Z" />
    </svg>
  );
}

/* ───────────────────────── Header ───────────────────────── */
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`sticky top-0 z-40 border-b bg-cream/95 backdrop-blur-sm transition-colors ${scrolled ? "border-line" : "border-transparent"}`}>
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Maharshi Organics home">
          <Image src="/logo.png" alt="Maharshi Organics logo" width={40} height={59} className="h-11 w-auto object-contain" priority />
          <span className="font-display text-xl leading-none text-leaf-900">
            Maharshi <span className="italic text-leaf-600">Organics</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`whitespace-nowrap text-[13px] tracking-wide transition-colors ${
                  active ? "text-leaf-900 underline decoration-saffron-500 underline-offset-[10px]" : "text-ink/60 hover:text-leaf-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-primary hidden whitespace-nowrap !px-5 !py-2.5 sm:inline-flex">
            Order on WhatsApp
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center text-leaf-900 xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-line bg-cream xl:hidden"
            aria-label="Mobile"
          >
            <ul className="container-x divide-y divide-line py-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className={`block py-3.5 font-display text-lg ${pathname === item.href ? "text-leaf-900" : "text-ink/70"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="grid grid-cols-2 gap-3 py-5">
                <a href={SITE.phoneHref} className="btn-secondary">
                  Call
                </a>
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  WhatsApp
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ───────────────────────── Footer ───────────────────────── */
export function Footer() {
  return (
    <footer className="bg-leaf-900 text-leaf-100">
      <div className="container-x grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <p className="font-display text-2xl text-white">
            Maharshi <span className="italic text-leaf-300">Organics</span>
          </p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-leaf-100/70">
            100% certified, authentic organic food for a healthier life — grown and processed without chemical fertilizers, pesticides or preservatives.
          </p>
        </div>

        <div>
          <h3 className="text-[11px] font-medium uppercase tracking-[0.22em] text-saffron-400">Explore</h3>
          <ul className="mt-5 space-y-2.5 text-sm text-leaf-100/75">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="transition-colors hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[11px] font-medium uppercase tracking-[0.22em] text-saffron-400">We stock</h3>
          <ul className="mt-5 space-y-2.5 text-sm text-leaf-100/75">
            {["Millets & Grains", "Pulses & Dals", "Cold-Pressed Oils", "Spices & Masalas", "Jaggery & Honey", "Himalayan Pink Rock Salt", "Bath Salts"].map((c) => (
              <li key={c}>
                <Link href="/products" className="transition-colors hover:text-white">
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[11px] font-medium uppercase tracking-[0.22em] text-saffron-400">Visit</h3>
          <address className="mt-5 space-y-1 text-sm not-italic leading-relaxed text-leaf-100/75">
            {SITE.addressLines.map((l) => (
              <p key={l}>{l}</p>
            ))}
          </address>
          <a href={SITE.phoneHref} className="mt-5 block font-display text-xl text-white hover:text-saffron-400">
            {SITE.phoneDisplay}
          </a>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-leaf-100/75">
            <a href={SITE.mapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-white">Directions</a>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
            <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white">Facebook</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col justify-between gap-2 py-6 text-xs text-leaf-100/50 md:flex-row">
          <p>© {new Date().getFullYear()} {SITE.legalName}</p>
          <p>Rajajinagar, Bengaluru</p>
        </div>
      </div>
    </footer>
  );
}

/* ───────────────────────── Floating WhatsApp ───────────────────────── */
export function FloatingActions() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center rounded-full bg-leaf-800 text-white shadow-md transition-colors hover:bg-leaf-900 md:bottom-8 md:right-8"
      aria-label="Chat with Maharshi Organics on WhatsApp"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  );
}
