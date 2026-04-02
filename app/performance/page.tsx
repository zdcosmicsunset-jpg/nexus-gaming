"use client";

import { useState } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Command, Terminal, FileCode2, Settings2 } from "lucide-react";
import Link from "next/link";

// --- DATOS DE LA SUB-PÁGINA (Performance) ---
const performanceGuides = [
  {
    id: "PF-01",
    title: "Windows 11 Kernel Debloat",
    type: "Script Automatizado",
    impact: "Extremo",
    time: "5 min",
    icon: <Terminal className="w-5 h-5" />
  },
  {
    id: "PF-02",
    title: "NVIDIA Control Panel: Latencia Cero",
    type: "Guía de Registro",
    impact: "Alto",
    time: "10 min",
    icon: <Settings2 className="w-5 h-5" />
  },
  {
    id: "PF-03",
    title: "Desactivación de Telemetría (Nivel BIOS)",
    type: "Configuración Avanzada",
    impact: "Medio",
    time: "15 min",
    icon: <FileCode2 className="w-5 h-5" />
  }
];

// --- COMPONENTE INTERACTIVO DE FILA ---
const GuideRow = ({ guide, index }: { guide: any, index: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Luz refractiva sutil en hover
  const refractiveGlow = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(0, 85, 255, 0.05), transparent 80%)`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + (index * 0.1), duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      className="group relative border-b border-black/[0.05] w-full py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-[#F0F0EB] transition-colors duration-700 cursor-pointer px-6 md:px-10 -mx-6 md:-mx-10 rounded-2xl overflow-hidden"
    >
      <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" style={{ background: refractiveGlow }} />

      {/* Info Principal */}
      <div className="flex items-start gap-6 relative z-10 flex-1">
        <div className="mt-1 text-black/30 group-hover:text-[#0055FF] transition-colors duration-500">
          {guide.icon}
        </div>
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[10px] font-mono tracking-widest text-black/40 bg-black/5 px-2 py-1 rounded-md">{guide.id}</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#0055FF]">{guide.type}</span>
          </div>
          <h3 className="text-2xl md:text-4xl font-light tracking-tight text-black/80 group-hover:text-black transition-colors duration-500">
            {guide.title}
          </h3>
        </div>
      </div>

      {/* Meta Datos (Impacto y Tiempo) */}
      <div className="flex items-center gap-12 relative z-10 shrink-0">
        <div className="hidden lg:flex flex-col items-end">
          <span className="text-xs uppercase tracking-widest text-black/30 font-medium mb-1">Impacto</span>
          <span className="text-sm font-medium text-black/70">{guide.impact}</span>
        </div>
        <div className="hidden lg:flex flex-col items-end">
          <span className="text-xs uppercase tracking-widest text-black/30 font-medium mb-1">Tiempo</span>
          <span className="text-sm font-medium text-black/70">{guide.time}</span>
        </div>
        <div className="h-12 w-12 rounded-full border border-black/10 flex items-center justify-center text-black/30 group-hover:bg-[#0055FF] group-hover:text-white group-hover:border-[#0055FF] transition-all duration-700 shadow-sm">
          <ArrowUpRight className="w-5 h-5" strokeWidth={1.5} />
        </div>
      </div>
    </motion.div>
  );
};

// --- PÁGINA PRINCIPAL DE LA CATEGORÍA ---
export default function PerformancePage() {
  return (
    <main className="min-h-screen bg-[#F7F7F5] text-[#1C1C1C] font-sans selection:bg-[#0055FF] selection:text-white overflow-hidden pb-32">
      
      {/* NAVBAR REDUCIDO */}
      <header className="fixed top-0 inset-x-0 z-50 px-6 md:px-12 py-6 flex justify-between items-center w-full border-b border-black/[0.04] backdrop-blur-md bg-[#F7F7F5]/80">
        <Link href="/" className="font-medium tracking-[0.1em] text-sm uppercase text-black/80 flex items-center gap-3 hover:text-[#0055FF] transition-colors duration-300 group">
          <div className="h-8 w-8 rounded-full border border-black/10 flex items-center justify-center group-hover:border-[#0055FF]/30 transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          </div>
          Volver al Nexus
        </Link>
        <div className="font-medium tracking-[0.1em] text-sm uppercase text-black/40 flex items-center gap-2">
          <Command className="w-4 h-4" /> 01 // PERFORMANCE
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-40">
        
        {/* CABECERA DE LA CATEGORÍA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-[#0055FF]" />
            <span className="text-[#0055FF] font-bold uppercase tracking-widest text-xs">Directorio Activo</span>
          </div>
          <h1 className="text-6xl md:text-[7rem] leading-[0.9] font-light tracking-tight mb-8 text-black/90">
            Performance <br />
            <span className="font-serif italic text-black/40">& FPS Boost.</span>
          </h1>
          <p className="text-lg text-black/50 font-light max-w-2xl leading-relaxed">
            Archivos, scripts y configuraciones de registro diseñadas para erradicar el input lag y maximizar los fotogramas por segundo a nivel de kernel.
          </p>
        </motion.div>

        {/* LISTA EDITORIAL (CONTENIDO) */}
        <div className="w-full border-t border-black/[0.05]">
          <div className="hidden md:flex items-center justify-between py-4 border-b border-black/[0.05] text-[10px] uppercase tracking-widest text-black/40 font-bold px-10">
            <span>Identificador / Documento</span>
            <div className="flex gap-20 mr-16">
              <span>Impacto</span>
              <span>Duración</span>
            </div>
          </div>

          {/* Renderizado de las guías */}
          {performanceGuides.map((guide, index) => (
            <GuideRow key={guide.id} guide={guide} index={index} />
          ))}
        </div>

      </div>
    </main>
  );
}