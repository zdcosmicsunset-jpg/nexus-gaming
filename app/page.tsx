"use client";

import { useState } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { ArrowUpRight, Search, Command, Zap, ShieldAlert, Cpu, Gamepad2 } from "lucide-react";

// --- COMPONENTES VISUALES AVANZADOS (Awwwards Style) ---

// 1. Título Cinemático con Glitch sutil y Gradiente Iridiscente
const CinematicTitle = () => {
  const iridescentGradient = "linear-gradient(90deg, #00CFFF 0%, #BF00FF 50%, #FFF000 100%)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="mb-24 relative"
    >
      <p className="text-black/40 text-sm tracking-widest uppercase font-medium mb-12">
        NEXUS.DB // Soporte Avanzado
      </p>
      
      {/* Título Principal con Efecto Glitch y Peso Ligero */}
      <h1 className="text-6xl md:text-[8rem] leading-[1.0] font-light tracking-tight mb-20 max-w-6xl text-black/90 relative">
        <span className="relative group">
          <span className="absolute -inset-1 text-black mix-blend-difference blur-sm opacity-20 group-hover:opacity-100 transition-opacity">Optimiza.</span>
          Optimiza.
        </span> <br />
        Resuelve. <br />
        
        {/* Frase Serif Italic con Máscara de Gradiente Iridiscente Animado */}
        <span className="font-serif italic text-transparent bg-clip-text animate-iridescent" style={{ backgroundImage: iridescentGradient }}>
          Domina el juego.
        </span>
      </h1>
    </motion.div>
  );
};

// 2. Entidad de Datos Refractiva (Lista Interactiva de $50k)
const RefractiveDataRow = ({ item }: { item: any }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Gradiente iridiscente que sigue al mouse (Efecto Refractivo)
  const refractiveGlow = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(191, 0, 255, 0.1), rgba(0, 207, 255, 0.05) 40%, transparent 80%)`;

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="group relative border-b border-black/[0.04] w-full py-12 md:py-20 flex flex-col lg:flex-row lg:items-center justify-between gap-10 hover:bg-[#F0F0EB] transition-colors duration-700 cursor-pointer px-6 md:px-12 -mx-6 md:-mx-12 rounded-3xl overflow-hidden"
    >
      {/* Luz refractiva interna que sigue al mouse */}
      <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" style={{ background: refractiveGlow }} />

      {/* Contenido Principal */}
      <div className="flex items-start md:items-center gap-10 md:gap-20 transform group-hover:translate-x-6 transition-transform duration-700 ease-[0.16,1,0.3,1] relative z-10 flex-1">
        <span className="text-sm font-medium text-black/20 font-mono pt-2 md:pt-0">
          {item.id}
        </span>
        <div className="flex gap-10 items-center">
            {/* Icono de Categoría (Aparece en Hover) */}
            <div className={`h-16 w-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-700 delay-100 ${item.id === "01" ? 'text-blue-400' : item.id === "02" ? 'text-rose-400' : 'text-emerald-400'}`}>
                {item.icon}
            </div>
            <div>
                <h2 className="text-4xl md:text-6xl font-light tracking-tight text-black/60 group-hover:text-black/95 transition-colors duration-700 mb-5 leading-none">
                    {item.title}
                </h2>
                <p className="text-base text-black/50 max-w-2xl font-light leading-relaxed group-hover:text-black/80 transition-colors duration-700">
                    {item.subtitle}
                </p>
            </div>
        </div>
      </div>

      {/* Tags y Flecha */}
      <div className="flex items-center gap-8 pl-16 md:pl-0 transform group-hover:-translate-x-2 transition-transform duration-700 ease-[0.16,1,0.3,1] relative z-10 shrink-0">
        <div className="hidden md:flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
          {item.tags.map((tag: string) => (
            <span key={tag} className="px-4 py-2 rounded-full border border-black/10 text-xs font-medium uppercase tracking-widest text-black/60 bg-white/50 backdrop-blur-sm">
              {tag}
            </span>
          ))}
        </div>
        <div className="h-16 w-16 rounded-full border border-black/10 flex items-center justify-center text-black/30 group-hover:bg-[#0055FF] group-hover:text-white group-hover:border-[#0055FF] transition-all duration-700 shadow-xl group-hover:shadow-[0_0_30px_rgba(0,85,255,0.3)]">
          <ArrowUpRight className="w-6 h-6" strokeWidth={1.5} />
        </div>
      </div>

    </div>
  );
};

// --- DATA (Directorio Expandido) ---
const directory = [
  {
    id: "01",
    icon: <Zap className="h-8 w-8" />,
    title: "Performance & FPS",
    subtitle: "Erradicación de Input Lag, Debloat de Windows y scripts de optimización a nivel kernel (CPU/GPU).",
    tags: ["FPS Boost", "Debloat", "Latency"]
  },
  {
    id: "02",
    icon: <ShieldAlert className="h-8 w-8" />,
    title: "Códigos de Error",
    subtitle: "Diagnóstico profundo de BSOD, errores fatales de DirectX y fallos de librerías VCRedist/OpenAL.",
    tags: ["BSOD", "DirectX", "Crash Fix"]
  },
  {
    id: "03",
    icon: <Cpu className="h-8 w-8" />,
    title: "Hardware Tuning",
    subtitle: "Curvas de voltaje de precisión, Undervolting seguro de GPU y Overclocking estabilizado para 4K.",
    tags: ["Overclock", "Undervolt", "BIOS"]
  },
  {
    id: "04",
    icon: <Gamepad2 className="h-8 w-8" />,
    title: "Mods & Parches",
    subtitle: "Directorio automatizado de fixes comunitarios para estabilizar ports de PC defectuosos.",
    tags: ["Community Mods", "Stuttering Fix"]
  }
];

// --- INTERFAZ PRINCIPAL (QUANTUM HUB) ---

export default function QuantumHub() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="min-h-screen bg-[#F7F7F5] text-[#1C1C1C] font-sans selection:bg-[#0055FF] selection:text-white overflow-hidden relative">
      
      {/* NAVBAR */}
      <header className="fixed top-0 inset-x-0 z-50 px-8 py-8 flex justify-between items-center w-full border-b border-black/[0.04] backdrop-blur-sm bg-[#F7F7F5]/80">
        <div className="font-medium tracking-[0.1em] text-sm uppercase text-black/80 flex items-center gap-3 cursor-pointer">
          <Command className="w-4 h-4 text-[#0055FF]" />
          NEXUS.DB // QUANTUM
        </div>
        <nav className="hidden md:flex gap-10 text-xs font-medium uppercase tracking-widest text-black/50">
          <a href="#" className="hover:text-black transition-colors duration-500">Directorio</a>
          <a href="#" className="hover:text-black transition-colors duration-500">Aportes</a>
          <a href="#" className="hover:text-black transition-colors duration-500">Manifiesto</a>
        </nav>
        <button className="text-xs font-bold uppercase tracking-widest text-black/50 hover:text-black transition-colors duration-500 cursor-pointer">
          Menú
        </button>
      </header>

      <div className="max-w-[1700px] mx-auto px-8 md:px-16 pt-32 pb-40 relative z-10">
        
        {/* HERO CINEMÁTICO */}
        <CinematicTitle />

        {/* BUSCADOR: Línea fina que se vuelve iridiscente al foco */}
        <div className="relative w-full max-w-4xl group mt-28 mb-32">
          <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pb-6">
            <Search className="w-8 h-8 text-black/20 group-focus-within:text-[#0055FF] transition-colors duration-500" strokeWidth={1.5} />
          </div>
          <input
            type="text"
            placeholder="Buscar error (Ej: 0xc0000142), juego corrupto o parche..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-3xl md:text-5xl font-light tracking-tight text-black placeholder:text-black/15 pb-8 pl-14 focus:outline-none border-b-2 border-black/10 focus:border-[#0055FF]/50 transition-colors duration-700"
          />
        </div>

        {/* LISTA EDITORIAL CON FÍSICAS DE REFRACCIÓN */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="w-full border-t border-black/[0.04]"
        >
          {directory.map((item) => (
            <RefractiveDataRow 
              key={item.id} 
              item={item} 
            />
          ))}
        </motion.section>

      </div>

      {/* ESTILOS GLOBALES INYECTADOS (Para gradientes animados) */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes iridescent {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-iridescent {
          background-size: 200% 200%;
          animation: iridescent 4s ease infinite;
        }
      `}} />

    </main>
  );
}