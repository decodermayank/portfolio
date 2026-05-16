"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { IconArrowDown } from "@tabler/icons-react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  const words = "I build things that work in the real world.".split(" ");

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="max-w-[1100px] mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          style={{ y, opacity }}
          className="z-10"
        >
          <div className="overflow-hidden mb-2">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="block text-gold/80 font-display text-lg md:text-xl font-medium tracking-[0.2em] uppercase"
            >
              Mayank Prabhakar
            </motion.span>
          </div>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/40 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.25em] mb-8 inline-block border-b border-gold/10 pb-2"
          >
            B.TECH CSE · GAUTAM BUDDHA UNIVERSITY · 2025–2029
          </motion.p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8 max-w-[700px] text-mask">
            {words.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden pb-[0.1em] mr-[0.25em]">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ 
                    delay: 0.3 + i * 0.06, 
                    duration: 1, 
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-text-muted text-lg md:text-xl max-w-[500px] mb-12 font-body leading-relaxed"
          >
            First-year CSE student at GBU — crafting robust applications, leading media operations, and shipping things that actually run in production.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-8 items-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-3 px-10 py-4 border border-gold text-gold font-mono text-xs uppercase tracking-[0.2em] relative overflow-hidden transition-all duration-500 hover:text-bg"
            >
              <span className="relative z-10">See My Work</span>
              <IconArrowDown size={18} className="relative z-10 transition-transform group-hover:translate-y-1" />
              <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </motion.a>
            
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Mayank_Prabhakar_Resume.pdf"
              whileHover={{ x: 5 }}
              className="flex items-center gap-3 text-text-muted font-mono text-xs uppercase tracking-[0.2em] hover:text-white transition-all duration-300"
            >
              Download CV <IconArrowDown size={18} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Photo */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]), scale }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative block aspect-[4/5] w-full max-w-[320px] md:max-w-[420px] mx-auto mt-12 md:mt-0"
        >
          <div 
            className="absolute inset-0 rounded-lg overflow-hidden grayscale sepia-[0.25] brightness-[0.9] contrast-[1.1] z-10"
            style={{
              maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)'
            }}
          >
            <img 
              src="/profile.jpg" 
              alt="Mayank Prabhakar"
              className="w-full h-full object-cover scale-110"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000";
              }}
            />
          </div>
          
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 border border-gold/10 rounded-full border-dashed" 
          />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-gold/30 rounded-br-2xl" />
          
          {/* Vertical Name Stamp */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute -right-12 top-1/2 -translate-y-1/2 rotate-90 origin-center"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-gold/30 whitespace-nowrap">
              Mayank Prabhakar — Portfolio 2026
            </span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-20 w-80 h-80 bg-gold/10 blur-[150px] rounded-full" 
      />
    </section>
  );
}

