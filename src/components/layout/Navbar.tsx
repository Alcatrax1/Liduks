"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "HOME", href: "/" },
  {
    name: "EMPRESA",
    dropdown: [
      { name: "Quem Somos", href: "/empresa#quem-somos" },
      { name: "Nossa Estrutura", href: "/empresa#estrutura" },
    ],
  },
  {
    name: "SOLUÇÕES",
    dropdown: [
      { name: "Comunicação Visual", href: "/solucoes#cv" },
      { name: "Adesivos Industriais", href: "/solucoes#adesivos" },
      { name: "Uniformes", href: "/solucoes#uniformes" },
    ],
  },
  { name: "CONTATO", href: "/contato" },
];

export function Navbar() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { type: "spring" as const, stiffness: 300, damping: 20 },
    },
    exit: { opacity: 0, y: -10, scale: 0.95, filter: "blur(4px)", transition: { duration: 0.15 } },
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 pt-4 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between rounded-full bg-white/60 backdrop-blur-md border border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.05)] px-6 py-2">
        <Link href="/" className="shrink-0 flex items-center">
          <Image src="/liduks.png" alt="Liduks Logo" width={80} height={80} className="object-contain h-9 md:h-10 w-auto drop-shadow-sm" />
        </Link>

        {/* N A V I G A T I O N */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => setHoveredMenu(link.name)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              {link.dropdown ? (
                <button className="text-sm font-semibold tracking-wide text-brand-text hover:text-brand-emerald transition-colors py-2">
                  {link.name}
                </button>
              ) : (
                <Link
                  href={link.href}
                  className="text-sm font-semibold tracking-wide text-brand-text hover:text-brand-emerald transition-colors py-2 inline-block"
                >
                  {link.name}
                </Link>
              )}

              {/* D R O P D O W N */}
              {link.dropdown && (
                <AnimatePresence>
                  {hoveredMenu === link.name && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                    >
                      <div className="bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-neutral-100 p-2 min-w-[200px] flex flex-col gap-1 overflow-hidden">
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="text-sm font-medium text-neutral-600 hover:text-brand-text hover:bg-neutral-50 px-4 py-2 rounded-xl transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* C T A */}
        <div className="hidden md:block">
          <Link
            href="/contato"
            className="inline-flex h-10 items-center justify-center rounded-full bg-brand-text px-6 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Orçamento
          </Link>
        </div>

        {/* M O B I L E   T O G G L E */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 text-brand-text"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* M O B I L E   M E N U   D R O P D O W N */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-4 right-4 mt-2 bg-white rounded-3xl p-6 shadow-2xl border border-neutral-100 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col gap-2">
                <Link
                  href={link.href || "#"}
                  className="font-heading font-bold text-lg text-brand-text"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <div className="flex flex-col gap-2 pl-4 border-l-2 border-neutral-100 mt-2">
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="text-neutral-500 font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contato"
              className="mt-4 w-full py-4 text-center rounded-xl bg-[#011740] text-white font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Orçamento
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
