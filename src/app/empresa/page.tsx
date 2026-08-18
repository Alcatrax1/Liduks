"use client";

import React from "react";
import { motion } from "framer-motion";

export default function EmpresaPage() {
  return (
    <div className="w-full flex-1 pt-32 pb-24 border-t border-neutral-100">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Editorial Heading */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ type: "spring", stiffness: 100, damping: 20 }}
           className="mb-24 text-center"
        >
          <p className="text-sm font-bold text-brand-primary tracking-widest uppercase mb-4">Quem Somos</p>
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl tracking-tighter text-brand-text leading-[1.1]">
            A verdadeira forma <br/>
            <span className="text-neutral-400">da comunicação visual.</span>
          </h1>
        </motion.div>

        {/* História e O que Fazemos (Editorial Body) */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
           className="prose prose-lg prose-neutral max-w-none text-brand-text mb-32"
        >
           <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
             <div className="flex-1">
               <h3 className="font-heading font-bold text-3xl mb-6">A Construção da Liduks</h3>
               <p className="lead text-lg md:text-xl text-neutral-500 font-medium leading-relaxed mb-6">
                 Somos especialistas em arquitetura de marcas. A Liduks não entrega apenas adesivos, ela entrega estruturas monumentais que transformam a maneira como os clientes interagem com grandes corporações.
               </p>
               <p className="text-neutral-600 leading-relaxed">
                 Nossa história é pautada pelo maquinário pesado, pelo design paramétrico e pela insistência inegociável na qualidade certificada pela ISO 9001:2008. Operamos nas mais complexas vertentes industriais, levando confiança, estética visual e durabilidade pra cada ponto de contato construído.
               </p>
             </div>
             <div className="flex-1 w-full">
                <img src="https://picsum.photos/seed/liduks_hist1/800/600" className="w-full h-full object-cover rounded-3xl shadow-lg" alt="História Liduks" />
             </div>
           </div>

           {/* MVV */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 border-t border-neutral-200">
             <div>
                <h3 className="font-heading font-bold text-2xl mb-4 text-brand-primary">Missão</h3>
                <p className="text-neutral-600 leading-relaxed text-sm">Entregar a mais alta performance construtiva em comunicação visual, assegurando que o logotipo do cliente torne-se um pilar sólido e monumental perante seu público.</p>
             </div>
             <div>
                <h3 className="font-heading font-bold text-2xl mb-4 text-brand-primary">Visão</h3>
                <p className="text-neutral-600 leading-relaxed text-sm">Ser o laboratório de engenharia visual mais admirado do sul do país, onde maquinário de vanguarda e mentes precisas se encontram para projetos desafiadores.</p>
             </div>
             <div>
                <h3 className="font-heading font-bold text-2xl mb-4 text-brand-primary">Valores</h3>
                <ul className="text-neutral-600 leading-relaxed text-sm list-disc pl-4 space-y-2">
                  <li>Rigor Milimétrico;</li>
                  <li>Inovação Tecnológica;</li>
                  <li>Comprometimento com NR's;</li>
                  <li>Inflexibilidade com Prazos.</li>
                </ul>
             </div>
           </div>
        </motion.div>

      </div>

      {/* Estrutura Section (Full width visual break) */}
      <section className="bg-brand-text py-32 text-white" id="estrutura">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
           <div className="flex flex-col md:flex-row gap-12 items-end justify-between mb-16 border-b border-brand-primary/30 pb-12">
              <div className="max-w-2xl">
                 <p className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4">Pátio Fabril e Operacional</p>
                 <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-tight mb-6">Nossa Estrutura</h2>
                 <p className="text-neutral-400">Um ecossistema industrial completo para desenvolvimento in-house absoluto. Nenhuma quebra de qualidade, nenhum processo terceirizado sem acompanhamento de ISO.</p>
              </div>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              
              <div className="bento-card bg-[#01102A] border-brand-primary/20 p-8 flex border flex-col justify-end relative overflow-hidden group min-h-[300px]">
                 <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/l_impress/600/600')] bg-cover mix-blend-overlay opacity-20 transition-transform duration-700 group-hover:scale-105" />
                 <div className="relative z-10">
                    <h4 className="font-heading font-bold text-xl mb-2 text-white">Impressoras</h4>
                    <p className="text-blue-200/50 text-sm">Resolução cirúrgica, HP Látex e alta escala com precisão absoluta de cor.</p>
                 </div>
              </div>
              
              <div className="bento-card bg-[#01102A] border-brand-primary/20 p-8 flex border flex-col justify-end relative overflow-hidden group min-h-[300px]">
                 <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/l_recort/600/600')] bg-cover mix-blend-overlay opacity-20 transition-transform duration-700 group-hover:scale-105" />
                 <div className="relative z-10">
                    <h4 className="font-heading font-bold text-xl mb-2 text-white">Recortes Automatizados</h4>
                    <p className="text-blue-200/50 text-sm">Mesas planas CNC, garantindo corte milimétrico e vinco sem esforço humano.</p>
                 </div>
              </div>

              <div className="bento-card bg-[#01102A] border-brand-primary/20 p-8 flex border flex-col justify-end relative overflow-hidden group min-h-[300px]">
                 <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/l_resina/600/600')] bg-cover mix-blend-overlay opacity-20 transition-transform duration-700 group-hover:scale-105" />
                 <div className="relative z-10">
                    <h4 className="font-heading font-bold text-xl mb-2 text-white">Laboratório de Resina</h4>
                    <p className="text-blue-200/50 text-sm">Acabamentos epóxi transparentes com cura e durabilidade extremas.</p>
                 </div>
              </div>

              <div className="bento-card bg-[#01102A] border-brand-primary/20 p-8 flex border flex-col justify-end relative overflow-hidden group min-h-[300px]">
                 <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/l_router/600/600')] bg-cover mix-blend-overlay opacity-20 transition-transform duration-700 group-hover:scale-105" />
                 <div className="relative z-10">
                    <h4 className="font-heading font-bold text-xl mb-2 text-white">Routher, Laser e Pintura</h4>
                    <p className="text-blue-200/50 text-sm">Fresamento metálico e pintura controlada para letras e totens.</p>
                 </div>
              </div>

              <div className="bento-card bg-[#01102A] border-brand-primary/20 p-8 flex border flex-col justify-end relative overflow-hidden group min-h-[300px]">
                 <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/l_frota/600/600')] bg-cover mix-blend-overlay opacity-20 transition-transform duration-700 group-hover:scale-105" />
                 <div className="relative z-10">
                    <h4 className="font-heading font-bold text-xl mb-2 text-white">Frota e Caminhão Munck</h4>
                    <p className="text-blue-200/50 text-sm">Logística bruta garantida para içamento e estabilidade total nas instalações em altura.</p>
                 </div>
              </div>

              <div className="bento-card bg-brand-primary p-8 flex flex-col justify-end relative overflow-hidden group min-h-[300px] border border-blue-400/20">
                 <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/l_equipe/600/600')] bg-cover mix-blend-overlay opacity-20 transition-transform duration-700 group-hover:scale-105" />
                 <div className="relative z-10">
                    <h4 className="font-heading font-bold text-xl mb-2 text-white">Equipe Especializada NR's</h4>
                    <p className="text-blue-100/80 text-sm">Trabalho em altura e adequações de segurança do trabalho plenamente atendidas e auditadas.</p>
                 </div>
              </div>

           </div>
        </div>
      </section>

    </div>
  );
}
