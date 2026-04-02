"use client";

import { useState } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { ArrowUpRight, Search, Command, Zap, ShieldAlert, Cpu, Gamepad2 } from "lucide-react";
import Link from "next/link";

// --- COMPONENTES VISUALES AVANZADOS (RESPONSIVE) ---

const CinematicTitle = () => {
  const iridescentGradient = "linear-gradient(90deg, #00CFFF 0%, #BF00FF 50%, #FFF000 100%)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="mb-16 md:mb-24 relative"
    >
      <p className="text-black/40 text-xs md:text-sm tracking-widest uppercase font-medium mb-8 md:mb-12">
        NEXUS.DB // Soporte Avanzado
      </p>
      
      {/* Tipografía escalable: text-5xl en móvil, 8rem en PC */}
      <h1 className="text-[3.5rem] leading-[1.0] md:text-7xl lg:text-[8rem] lg:leading-[1.0] font-light tracking-tight mb-12 md:mb-20 max-w-6xl text-black/90 relative">
        <span className="relative group">
          <span className="absolute -inset-1 text-black mix-blend-difference blur-sm opacity-20 group-hover:opacity-100 transition-opacity hidden md:block">Optimiza.</span>
          Optimiza.
        </span> <br />
        Resuelve. <br />
        
        <span className="font-serif italic text-transparent bg-clip-text animate-iridescent" style={{ backgroundImage: iridescentGradient }}>
          Domina el juego.
        </span>
      </h1>
    </motion.div>
  );
};

const RefractiveDataRow = ({ item }: { item: any }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const refractiveGlow = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(191, 0, 255, 0.1), rgba(0, 207, 255, 0.05) 40%, transparent 80%)`;

  return (
    <Link 
      href={item.href}
      onMouseMove={handleMouseMove}
      // Ajustes de padding y dirección (columna en móvil, fila en PC)
      className="group relative border-b border-black/[0.04] w-full py-8 md:py-16 lg:py-20 flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-10 hover:bg-[#F0F0EB] transition-colors duration-700 cursor-pointer px-4 md:px-8 lg:px-12 -mx-4 md:-mx-8 lg:-mx-12 rounded-2xl lg:rounded-3xl overflow-hidden block"
    >
      <motion.div className="hidden lg:block absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" style={{ background: refractiveGlow }} />

      {/* Contenido Principal */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 lg:gap-20 transform lg:group-hover:translate-x-6 transition-transform duration-700 ease-[0.16,1,0.3,1] relative z-10 flex-1 w-full">
        <span className="text-xs md:text-sm font-medium text-black/20 font-mono">
          {item.id}
        </span>
        
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 items-start md:items-center w-full">
            {/* ICONO: Visible en móvil, oculto en PC hasta el hover */}
            <div className={`h-12 w-12 lg:h-16 lg:w-16 rounded-xl lg:rounded-2xl bg-black border border-white/10 flex items-center justify-center lg:opacity-0 lg:group-hover:opacity-100 lg:scale-90 lg:group-hover:scale-100 transition-all duration-700 lg:delay-100 shrink-0 ${item.id === "01" ? 'text-blue-400' : item.id === "02" ? 'text-rose-400' : 'text-emerald-400'}`}>
                {item.icon}
            </div>
            <div>
                {/* TÍTULO: text-3xl en móvil */}
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-black/80 lg:text-black/60 lg:group-hover:text-black/95 transition-colors duration-700 mb-3 md:mb-5 leading-none">
                    {item.title}
                </h2>
                <p className="text-sm md:text-base text-black/60 lg:text-black/50 max-w-2xl font-light leading-relaxed lg:group-hover:text-black/80 transition-colors duration-700">
                    {item.subtitle}
                </p>
            </div>
        </div>
      </div>

      {/* Tags y Flecha */}
      <div className="flex items-center justify-between lg:justify-end w-full lg:w-auto mt-4 lg:mt-0 pl-0 lg:pl-0 transform lg:group-hover:-translate-x-2 transition-transform duration-700 ease-[0.16,1,0.3,1] relative z-10 shrink-0">
        
        {/* TAGS: Visibles en móvil (con flex-wrap), ocultos en PC hasta hover */}
        <div className="flex flex-wrap gap-2 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700 lg:delay-200 mr-4">
          {item.tags.map((tag: string) => (
            <span key={tag} className="px-3 py-1.5 lg:px-4 lg:py-2 rounded-full border border-black/10 text-[10px] md:text-xs font-medium uppercase tracking-widest text-black/60 bg-white/50 backdrop-blur-sm">
              {tag}
            </span>
          ))}
        </div>
        
        {/* FLECHA */}
        <div className="h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 rounded-full border border-black/10 flex items-center justify-center text-black/50 lg:text-black/30 bg-white/50 lg:bg-transparent lg:group-hover:bg-[#0055FF] lg:group-hover:text-white lg:group-hover:border-[#0055FF] transition-all duration-700 shadow-sm lg:shadow-xl lg:group-hover:shadow-[0_0_30px_rgba(0,85,255,0.3)] shrink-0">
          <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" strokeWidth={1.5} />
        </div>
      </div>

    </Link>
  );
};

// --- DATA ---
const directory = [
  { id: "01", icon: <Zap className="h-6 w-6 lg:h-8 lg:w-8" />, title: "Performance & FPS", subtitle: "Erradicación de Input Lag, Debloat de Windows y scripts de optimización a nivel kernel (CPU/GPU).", tags: ["FPS Boost", "Debloat", "Latency"], href: "/performance" },
  { id: "02", icon: <ShieldAlert className="h-6 w-6 lg:h-8 lg:w-8" />, title: "Códigos de Error", subtitle: "Diagnóstico profundo de BSOD, errores fatales de DirectX y fallos de librerías VCRedist/OpenAL.", tags: ["BSOD", "DirectX", "Crash Fix"], href: "/errores" },
  { id: "03", icon: <Cpu className="h-6 w-6 lg:h-8 lg:w-8" />, title: "Hardware Tuning", subtitle: "Curvas de voltaje de precisión, Undervolting seguro de GPU y Overclocking estabilizado para 4K.", tags: ["Overclock", "Undervolt", "BIOS"], href: "/hardware" },
  { id: "04", icon: <Gamepad2 className="h-6 w-6 lg:h-8 lg:w-8" />, title: "Mods & Parches", subtitle: "Directorio automatizado de fixes comunitarios para estabilizar ports de PC defectuosos.", tags: ["Community Mods", "Stuttering Fix"], href: "/mods" }
];

export default function QuantumHub() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="min-h-screen bg-[#F7F7F5] text-[#1C1C1C] font-sans selection:bg-[#0055FF] selection:text-white overflow-hidden relative">
      
      {/* NAVBAR */}
      <header className="fixed top-0 inset-x-0 z-50 px-6 md:px-8 py-6 md:py-8 flex justify-between items-center w-full border-b border-black/[0.04] backdrop-blur-sm bg-[#F7F7F5]/80">
        <div className="font-medium tracking-[0.1em] text-xs md:text-sm uppercase text-black/80 flex items-center gap-2 md:gap-3 cursor-pointer">
          <Command className="w-3 h-3 md:w-4 md:h-4 text-[#0055FF]" />
          NEXUS.DB
        </div>
        <nav className="hidden lg:flex gap-10 text-xs font-medium uppercase tracking-widest text-black/50">
          <a href="#" className="hover:text-black transition-colors duration-500">Directorio</a>
          <a href="#" className="hover:text-black transition-colors duration-500">Aportes</a>
          <a href="#" className="hover:text-black transition-colors duration-500">Manifiesto</a>
        </nav>
        <button className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-black/80 hover:text-black transition-colors duration-500 cursor-pointer">
          Menú
        </button>
      </header>

      <div className="max-w-[1700px] mx-auto px-6 md:px-12 pt-28 md:pt-32 pb-24 md:pb-40 relative z-10">
        
        <CinematicTitle />

        {/* BUSCADOR */}
        <div className="relative w-full max-w-4xl group mt-16 md:mt-28 mb-20 md:mb-32">
          <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pb-4 md:pb-6">
            <Search className="w-6 h-6 md:w-8 md:h-8 text-black/20 group-focus-within:text-[#0055FF] transition-colors duration-500" strokeWidth={1.5} />
          </div>
          <input
            type="text"
            placeholder="Buscar error, juego o parche..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-xl md:text-3xl lg:text-5xl font-light tracking-tight text-black placeholder:text-black/15 pb-4 md:pb-8 pl-10 md:pl-14 focus:outline-none border-b border-black/10 focus:border-[#0055FF]/50 transition-colors duration-700"
          />
        </div>

        {/* LISTA */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="w-full border-t border-black/[0.04]"
        >
          {directory.map((item) => (
            <RefractiveDataRow key={item.id} item={item} />
          ))}
        </motion.section>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes iridescent { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        .animate-iridescent { background-size: 200% 200%; animation: iridescent 4s ease infinite; }
      `}} />
    </main>
  );
}