"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, EnvelopeSimple, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export default function ContatoPage() {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const InputField = ({ label, id, type = "text" }: { label: string, id: string, type?: string }) => (
    <div className="relative w-full">
      <label 
         htmlFor={id} 
         className={`absolute left-4 px-1 transition-all duration-300 font-medium ${focusedInput === id ? '-top-2.5 text-xs text-brand-emerald bg-white' : 'top-4 text-sm text-neutral-400 bg-transparent pointer-events-none'}`}
      >
        {label}
      </label>
      <input 
        id={id}
        type={type}
        onFocus={() => setFocusedInput(id)}
        onBlur={(e) => {
          if (e.target.value === "") setFocusedInput(null);
        }}
        className="w-full h-14 bg-white border border-neutral-200 rounded-xl px-4 pt-1 text-brand-text outline-none focus:border-brand-emerald focus:ring-1 focus:ring-brand-emerald transition-all"
      />
    </div>
  );

  return (
    <div className="w-full flex-1 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
           {/* Left: Info */}
           <div className="lg:col-span-5 flex flex-col justify-center">
              <h1 className="font-heading font-extrabold text-5xl tracking-tighter text-brand-text mb-6">Iniciar Projeto.</h1>
              <p className="text-xl text-neutral-500 mb-12 max-w-md">
                Pronto para causar impacto? Entre em contato e permita-nos avaliar as necessidades da sua marca corporativa.
              </p>

              <div className="space-y-8">
                 <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-brand-emerald shrink-0">
                       <MapPin weight="fill" size={24} />
                    </div>
                    <div>
                       <h4 className="font-bold text-brand-text">Headquarters Liduks</h4>
                       <p className="text-neutral-500 text-sm mt-1">Rua da Comunicação, 123<br/>Centro Industrial, Panambi - RS</p>
                    </div>
                 </div>

                 <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-brand-emerald shrink-0">
                       <Phone weight="fill" size={24} />
                    </div>
                    <div>
                       <h4 className="font-bold text-brand-text">Suporte & Orçamentos</h4>
                       <p className="text-neutral-500 text-sm mt-1">+55 (55) 3375-0000</p>
                    </div>
                 </div>

                 <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-brand-emerald shrink-0">
                       <EnvelopeSimple weight="fill" size={24} />
                    </div>
                    <div>
                       <h4 className="font-bold text-brand-text">Correio Eletrônico</h4>
                       <p className="text-neutral-500 text-sm mt-1">projetos@liduks.com.br</p>
                    </div>
                 </div>
              </div>
           </div>

           {/* Right: Modern Form */}
           <div className="lg:col-span-7">
              <div className="bento-card p-8 sm:p-12">
                 <h3 className="font-heading font-bold text-2xl mb-8">Envie sua mensagem.</h3>
                 <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                       <InputField label="Nome Completo" id="name" />
                       <InputField label="Empresa" id="company" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                       <InputField label="E-mail" id="email" type="email" />
                       <InputField label="Telefone" id="phone" />
                    </div>
                    <div className="relative w-full">
                       <label 
                          htmlFor="message" 
                          className={`absolute left-4 px-1 transition-all duration-300 font-medium ${focusedInput === 'message' ? '-top-2.5 text-xs text-brand-emerald bg-white' : 'top-4 text-sm text-neutral-400 bg-transparent pointer-events-none'}`}
                       >
                         Como podemos ajudar?
                       </label>
                       <textarea 
                         id="message"
                         rows={5}
                         onFocus={() => setFocusedInput('message')}
                         onBlur={(e) => {
                           if (e.target.value === "") setFocusedInput(null);
                         }}
                         className="w-full bg-white border border-neutral-200 rounded-xl px-4 pt-4 text-brand-text outline-none focus:border-brand-emerald focus:ring-1 focus:ring-brand-emerald transition-all resize-none"
                       />
                    </div>
                    <Button size="lg" className="w-full gap-2">
                       <EnvelopeSimple weight="bold" /> Enviar Solicitação
                    </Button>
                 </form>

                 <div className="mt-8 flex flex-col items-center gap-4 border-t border-neutral-100 pt-8">
                    <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Ou inicie via Whatsapp</p>
                    <a href="#" className="flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-medium rounded-full shadow-[0_10px_20px_-10px_rgba(37,211,102,0.5)] hover:bg-[#20BE5A] transition-colors">
                       <WhatsappLogo size={24} weight="fill" /> Chamar no WhatsApp
                    </a>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}
