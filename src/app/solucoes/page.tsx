"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const filters = ["Comunicação Visual", "Adesivos Industriais", "Uniformes"];

const servicos = [
  // Comunicação Visual
  { id: 1, cat: "Comunicação Visual", title: "Fachadas", desc: "Revestimentos em ACM e letreiros que formam a linha de frente da sua corporação.", img: "cv_fachada" },
  { id: 2, cat: "Comunicação Visual", title: "Envelopamento de Frotas", desc: "Padronização de veículos leves e pesados utilizando adesivos cast de altíssima durabilidade.", img: "cv_frota" },
  { id: 3, cat: "Comunicação Visual", title: "Letreiros e Totens", desc: "Estruturas block-letter e totens de sinalização corporativa com iluminação LED.", img: "cv_letreiro" },
  { id: 4, cat: "Comunicação Visual", title: "Sinalizações, Outdoors e Feiras", desc: "Projetos de grande porte para PDVs, pórticos, estandes e rodovias.", img: "cv_feiras" },

  // Adesivos Industriais
  { id: 5, cat: "Adesivos Industriais", title: "Adesivos Laminados e Resinados", desc: "Etiquetas técnicas de alta resistência ao atrito, intempéries e produtos químicos.", img: "ad_laminado" },
  { id: 6, cat: "Adesivos Industriais", title: "Plaquetas em Alumínio", desc: "Identificação rastreável para patrimônio e numeração de chassis de maquinário pesado.", img: "ad_aluminio" },
  { id: 7, cat: "Adesivos Industriais", title: "Painéis Policarbonato e Refletivos", desc: "Teclados de membrana e faixas de segurança seguindo as normas nacionais de trânsito e indústria.", img: "ad_painel" },

  // Uniformes
  { id: 8, cat: "Uniformes", title: "Linha Empresarial e Escolar", desc: "Corte em alfaiataria técnica, camisaria e tecidos de altíssima longevidade para o dia a dia e escolas.", img: "un_empresa" },
  { id: 9, cat: "Uniformes", title: "Linha Esportiva e Ciclismo", desc: "Tecidos tecnológicos com proteção solar, regulação térmica e dry-fit de performance rigorosa.", img: "un_esporte" },
  { id: 10, cat: "Uniformes", title: "Camisetas do Agro", desc: "Roupas táticas desenvolvidas especificamente para conforto e proteção intensa no campo.", img: "un_agro" },
];

export default function SolucoesPage() {
  const [activeFilter, setActiveFilter] = useState("Comunicação Visual");

  const filteredServicos = servicos.filter(s => s.cat === activeFilter);

  return (
    <div className="w-full flex-1 pt-32 pb-24 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <p className="text-sm font-bold text-brand-primary tracking-widest uppercase mb-4">Nossa Linha de Produtos</p>
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl tracking-tighter text-brand-text mb-6">Excelência Aplicada.</h1>
          <p className="text-xl text-neutral-500">
            Três grandes divisões integradas dentro do nosso pátio industrial prontas para escalar a sua operação.
          </p>
        </div>

        {/* Botões do Menu Superior do Briefing */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-8 py-3 rounded-full text-base font-bold transition-all duration-300 ${
                activeFilter === f 
                  ? "bg-brand-primary text-white shadow-[0_10px_30px_rgba(1,23,64,0.3)] scale-105" 
                  : "bg-white border border-neutral-200 text-neutral-500 hover:border-brand-primary hover:text-brand-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Product Grid via Framer layout */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
           <AnimatePresence mode="popLayout">
             {filteredServicos.map((s) => (
               <motion.div
                 layout
                 initial={{ opacity: 0, scale: 0.95, y: 20 }}
                 animate={{ opacity: 1, scale: 1, y: 0 }}
                 exit={{ opacity: 0, scale: 0.95, y: -20 }}
                 transition={{ type: "spring", stiffness: 100, damping: 20 }}
                 key={s.id}
                 className="flex flex-col group cursor-pointer bg-white p-4 rounded-[2rem] border border-neutral-100 shadow-sm hover:shadow-2xl transition-all duration-500"
               >
                 <div className="bento-card overflow-hidden relative aspect-[4/3] mb-6 rounded-3xl">
                    <img src={`https://picsum.photos/seed/${s.img}/600/450`} alt={s.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 </div>
                 <div className="px-2">
                    <h3 className="font-heading font-bold text-2xl text-brand-text mb-3 group-hover:text-brand-primary transition-colors">{s.title}</h3>
                    <p className="text-neutral-500 leading-relaxed min-h-[4rem]">{s.desc}</p>
                 </div>
               </motion.div>
             ))}
           </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
}
