"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { LiquidGlassContainer } from "@/components/ui/LiquidGlassContainer";
import { CheckCircle, Medal, RocketLaunch, Handshake } from "@phosphor-icons/react/dist/ssr";

// Perpetual Animation Variants (taste-skill requirements)
const floatAnimation = {
  y: ["0%", "-3%", "0%"],
  transition: { repeat: Infinity, duration: 6, ease: "easeInOut" as const }
};
const pulseAnimation = {
  scale: [1, 1.05, 1],
  opacity: [0.8, 1, 0.8],
  transition: { repeat: Infinity, duration: 4, ease: "easeInOut" as const }
};

export default function Home() {
  const scrollContainerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"],
  });

  const requestRef = useRef<number | null>(null);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Only drive video via scroll on desktop
    if (isMobile) return;
    if (requestRef.current !== null) {
      cancelAnimationFrame(requestRef.current);
    }
    requestRef.current = requestAnimationFrame(() => {
      if (videoRef.current && videoRef.current.duration) {
        videoRef.current.currentTime = latest * videoRef.current.duration;
      }
    });
  });

  return (
    <div className="w-full flex-1">
      {/* ----------------- HERO SECTION ----------------- */}
      {/* Mobile: normal section (no 300vh scroll trick). Desktop: scroll-driven video */}
      <section ref={scrollContainerRef} className="relative w-full h-auto md:h-[300vh] bg-white">
        <div className="md:sticky md:top-0 w-full md:h-screen overflow-hidden bg-white flex flex-col md:block">
          
          {/* --- MOBILE: Static poster image --- */}
          <div className="relative w-full md:hidden z-0 overflow-hidden flex items-end justify-center shrink-0">
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="w-full"
             >
               <Image
                 src="/hero_poster.jpg"
                 alt="Prédio Liduks - Comunicação Visual Completa"
                 width={1440}
                 height={1440}
                 priority
                 className="w-full h-auto object-contain"
               />
             </motion.div>
             {/* Fade overlay - only bottom edge for text blend */}
             <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-white to-transparent pointer-events-none" />
          </div>

          {/* --- DESKTOP: Scroll-driven video --- */}
          <div className="hidden md:absolute md:inset-y-0 md:inset-x-auto md:right-0 md:w-[65vw] md:h-full z-0 overflow-hidden md:flex items-center justify-end">
             <video
               ref={videoRef}
               src="/hero_video.mp4"
               playsInline
               muted
               preload="auto"
               poster="/hero_poster.jpg"
               className="w-full h-full object-contain object-right"
               style={{ pointerEvents: 'none' }}
             />
             {/* Fade Overlay */}
             <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent pointer-events-none" />
          </div>

          {/* Content overlay */}
          <div className="relative z-10 w-full flex-1 md:absolute md:inset-0 max-w-7xl mx-auto px-6 sm:px-8 flex flex-col justify-start md:justify-center pt-6 md:pt-0 pb-16 md:pb-0">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="max-w-xl text-center md:text-left"
            >
              <p className="text-[10px] sm:text-xs font-bold text-brand-primary tracking-[0.2em] uppercase mb-2 md:mb-4">COMUNICAÇÃO VISUAL</p>
              <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-[5.5rem] tracking-tighter leading-[1.05] text-brand-text">
                Força Visual.<br className="md:block"/>
                <span className="text-brand-primary block mt-1 md:mt-0">Qualidade Global.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
              className="text-base sm:text-lg md:text-xl text-neutral-500 max-w-lg mt-4 mb-6 md:mt-6 md:mb-10 leading-relaxed font-medium text-center md:text-left mx-auto md:mx-0"
            >
              Desde letreiros a painéis complexos. Construímos pontos de contato em escala industrial para dominar o seu fluxo de clientes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 md:gap-4 w-full sm:w-auto"
            >
               <Link href="/contato" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#011740] text-white hover:bg-[#02143C] rounded-full shadow-[0_10px_30px_rgba(1,23,64,0.3)] transition-colors px-8 py-4 font-bold text-sm md:text-base">
                 Solicitar Orçamento
               </Link>
               <Link href="/solucoes" className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-[#011740] hover:border-[#011740] border border-neutral-300 rounded-full shadow-sm transition-colors px-8 py-4 font-bold text-sm md:text-base">
                 Ver Soluções
               </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ----------------- SELOS DE CONFIANÇA ----------------- */}
      <section className="py-16 border-y border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-wrap justify-between items-center gap-8">
             <div className="flex items-center gap-3 text-brand-text font-heading font-semibold text-sm md:text-base tracking-wide"><CheckCircle weight="fill" className="text-brand-primary" size={24} /> Qualidade Impecável</div>
             <div className="flex items-center gap-3 text-brand-text font-heading font-semibold text-sm md:text-base tracking-wide"><RocketLaunch weight="fill" className="text-brand-primary" size={24} /> Inovação Constante</div>
             <div className="flex items-center gap-3 text-brand-text font-heading font-semibold text-sm md:text-base tracking-wide"><Handshake weight="fill" className="text-brand-primary" size={24} /> Parceria Estratégica</div>
             <div className="flex items-center gap-3 text-brand-text font-heading font-semibold text-sm md:text-base tracking-wide"><Medal weight="fill" className="text-brand-primary" size={24} /> ISO 9001:2008</div>
          </div>
        </div>
      </section>

      {/* ----------------- DESCRIÇÃO & ISO ----------------- */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-8">
          <h2 className="font-heading font-bold text-3xl md:text-5xl tracking-tight text-brand-text">A engenharia por trás do design.</h2>
          <p className="text-lg text-neutral-500 leading-relaxed">
            Não entregamos apenas materiais impressos. A Liduks Executa projetos complexos de engenharia visual em conformidade e operando sob selos de qualidade como a certificação <strong className="text-brand-primary">ISO 9001:2008</strong>, garantindo excelência em cada milímetro finalizado.
          </p>
        </div>
      </section>

      {/* ----------------- BENTO GRID (Recursos) ----------------- */}
      <section className="pb-32">
         <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl tracking-tight text-brand-text mb-12 text-center uppercase">Alguns de nossos trabalhos</h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
               
               {/* Card Principal */}
               <motion.div animate={floatAnimation} className="md:col-span-8 relative bento-card overflow-hidden h-[500px]">
                  <img src="https://picsum.photos/seed/liduks_bento1/1200/800" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105" alt="Fachadas de Alta Qualidade" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  <div className="absolute bottom-10 left-10 right-10">
                    <p className="text-brand-emerald font-bold tracking-widest text-sm mb-2">A ESSÊNCIA</p>
                    <h3 className="font-heading font-bold text-4xl text-white">Nossa Paixão: Sua Marca</h3>
                  </div>
               </motion.div>

               {/* Card Duplo Cima/Baixo na direita */}
               <div className="md:col-span-4 flex flex-col gap-6 h-[500px]">
                  <div className="flex-1 bento-card relative overflow-hidden group">
                     <img src="https://picsum.photos/seed/liduks_bento2/600/400" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Letreiros" />
                     <div className="absolute inset-0 bg-black/40 pointer-events-none group-hover:bg-black/20 transition-colors duration-500" />
                     <div className="absolute bottom-6 left-6">
                        <h4 className="font-heading font-bold text-2xl text-white mb-1">Letreiros 3D</h4>
                        <p className="text-white/80 text-sm">Sinalização Premium</p>
                     </div>
                  </div>
                  
                  <div className="flex-1 bento-card relative overflow-hidden group">
                     <img src="https://picsum.photos/seed/liduks_bento3/600/400" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Frota" />
                     <div className="absolute inset-0 bg-black/40 pointer-events-none group-hover:bg-black/20 transition-colors duration-500" />
                     <div className="absolute bottom-6 left-6">
                        <h4 className="font-heading font-bold text-2xl text-white mb-1">Frotas</h4>
                        <p className="text-white/80 text-sm">Envelopamento Avançado</p>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* ----------------- NOSSOS CLIENTES (Marquee Infinito) ----------------- */}
      <section className="py-24 bg-white border-y border-neutral-100 overflow-hidden shrink-0">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-12 text-center">
          <p className="text-base font-bold text-neutral-400 tracking-widest uppercase">Alguns de nossos clientes</p>
        </div>
        {/* Seamless Infinite Runner */}
        <div className="relative w-full flex overflow-hidden">
          <motion.div
            className="flex flex-nowrap items-center gap-16 md:gap-32 px-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          >
             {/* Array duplicado para criar loop perfeito */}
             {[1,2,3,4,5,6,1,2,3,4,5,6].map((i, idx) => (
                <div key={idx} className="text-2xl font-heading font-black text-neutral-300 uppercase tracking-tighter whitespace-nowrap opacity-60">
                   {/* Fallback logos textuais elegantes */}
                   {["Valmet", "Stara", "Saur", "Kepler", "Bruning", "Tromink"][i-1]}
                </div>
             ))}
          </motion.div>
        </div>
      </section>

      {/* ----------------- DEPOIMENTOS (Tinder/Stack Concept) ----------------- */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
           <div>
             <h2 className="font-heading font-bold text-4xl lg:text-5xl tracking-tight text-brand-text mb-6">A experiência importa.</h2>
             <p className="text-neutral-500 text-lg max-w-md">O que nossos parceiros de longa data dizem sobre o compromisso com prazos inflexíveis e acabamentos que superam as expectativas.</p>
           </div>
           
           <div className="relative min-h-[300px]">
              {/* Stack effect */}
              <div className="absolute top-4 left-4 right-[-1rem] bottom-[-1rem] bg-neutral-200/50 rounded-3xl -z-10" />
              <div className="absolute top-2 left-2 right-[-0.5rem] bottom-[-0.5rem] bg-neutral-100 rounded-3xl -z-10" />
              <div className="bento-card p-10 relative bg-white h-full z-10 flex flex-col justify-between">
                 <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map(j => <span key={j} className="text-yellow-400 text-xl">★</span>)}
                 </div>
                 <p className="text-xl leading-relaxed text-brand-text font-medium mb-10">"A readequação da nossa fábrica necessitava de um parceiro robusto. A Liduks entregou sinalização industrial de altíssimo garbo dentro do tracking esperado e com excelência."</p>
                 <div className="flex items-center gap-4">
                    <img src="https://ui-avatars.com/api/?name=Elias+G&background=F5F5F5&color=1A1A1B" className="w-12 h-12 rounded-full border border-neutral-200" alt="Avatar"/>
                    <div>
                      <p className="font-bold text-brand-text text-sm">Sr. Elias Gutemberg</p>
                      <p className="text-neutral-400 text-xs">Diretor Industrial • Panambi</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ----------------- NEWSLETTER ----------------- */}
      <section className="py-24 bg-brand-text mb-32 mx-4 sm:mx-8 rounded-[3rem]">
        <div className="max-w-3xl mx-auto px-6 text-center">
            <h3 className="font-heading font-bold text-3xl text-white mb-6">Fique por Dentro das Novidades!</h3>
            <div className="flex flex-col sm:flex-row items-center gap-4 max-w-xl mx-auto">
               <input 
                  type="email" 
                  placeholder="Seu melhor e-mail institucional"
                  className="w-full bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-emerald focus:ring-1 focus:ring-brand-emerald transition-colors"
               />
               <Button size="lg" variant="primary" className="w-full sm:w-auto shrink-0 border border-white/10">
                 Assinar Agora
               </Button>
            </div>
        </div>
      </section>

    </div>
  );
}
