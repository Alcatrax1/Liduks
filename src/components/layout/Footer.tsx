import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FacebookLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200 py-24 sm:py-32 mt-auto">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 md:grid-cols-4 gap-16">

        {/* Brand & Slogan */}
        <div className="md:col-span-1 space-y-6">
          <div className="shrink-0">
            <Image src="/liduks.png" alt="Liduks Logo" width={80} height={80} className="object-contain h-10 md:h-12 w-auto" />
          </div>
          <p className="text-neutral-500 text-sm max-w-[250px] leading-relaxed">
            Transformando marcas e impactando clientes através de comunicação visual de alta agência.
          </p>
        </div>

        {/* Links Internos */}
        <div className="space-y-6">
          <h4 className="font-heading font-bold text-sm text-brand-text uppercase tracking-widest">Navegação</h4>
          <ul className="space-y-3">
            <li><Link href="/" className="text-neutral-500 hover:text-brand-emerald text-sm transition-colors">Home</Link></li>
            <li><Link href="/empresa" className="text-neutral-500 hover:text-brand-emerald text-sm transition-colors">A Empresa</Link></li>
            <li><Link href="/solucoes" className="text-neutral-500 hover:text-brand-emerald text-sm transition-colors">Nossas Soluções</Link></li>
            <li><Link href="/contato" className="text-neutral-500 hover:text-brand-emerald text-sm transition-colors">Contato e Orçamento</Link></li>
          </ul>
        </div>

        {/* Localização & Suporte */}
        <div className="space-y-6">
          <h4 className="font-heading font-bold text-sm text-brand-text uppercase tracking-widest">Contato</h4>
          <ul className="space-y-3 text-sm text-neutral-500">
            <li>suporte@liduks.com.br</li>
            <li>+55 (55) 3375-0000</li>
            <li>Panambi - RS</li>
            <li>Rua da Comunicação, 123</li>
          </ul>
        </div>

        {/* Redes Sociais */}
        <div className="space-y-6">
          <h4 className="font-heading font-bold text-sm text-brand-text uppercase tracking-widest">Social</h4>
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200 text-neutral-500 hover:text-brand-emerald hover:border-brand-emerald transition-colors">
              <InstagramLogo weight="fill" width={20} height={20} />
            </a>
            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200 text-neutral-500 hover:text-brand-emerald hover:border-brand-emerald transition-colors">
              <FacebookLogo weight="fill" width={20} height={20} />
            </a>
            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200 text-neutral-500 hover:text-brand-emerald hover:border-brand-emerald transition-colors">
              <LinkedinLogo weight="fill" width={20} height={20} />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mt-24 pt-8 border-t border-neutral-100 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-neutral-400">
          © {new Date().getFullYear()} Liduks Comunicação Visual. Todos os direitos reservados.
        </p>
        <p className="text-xs text-neutral-400">
          ISO 9001:2008 Certified
        </p>
      </div>
    </footer>
  );
}
