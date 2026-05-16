"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const stats = [
  { value: "3+", label: "Projects Shipped" },
  { value: "700+", label: "Volunteers Coordinated" },
  { value: "2", label: "Professional Roles" },
];

const education = [
  { institution: "Gautam Buddha University", degree: "B.Tech CSE", duration: "2025–2029" },
  { institution: "SVM Inter College", degree: "Class 12th", duration: "2025" },
  { institution: "SVM Inter College", degree: "Class 10th", duration: "2023" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const revealRef = useIntersectionObserver();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section
      id="about"
      ref={(el) => {
        // @ts-ignore
        sectionRef.current = el;
        // @ts-ignore
        revealRef.current = el;
      }}
      className="py-section overflow-hidden"
    >
      <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[38%_62%] gap-20 items-start">
        {/* Photo Container */}
        <div className="reveal relative aspect-[3/4] w-full hidden md:block">
          <motion.div
            style={{ y: imgY }}
            className="absolute inset-0 rounded-lg overflow-hidden grayscale sepia-[0.25] brightness-[0.82] contrast-[1.05]"
            style={{
              maskImage: 'linear-gradient(to right, black 60%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, black 60%, transparent 100%)'
            }}
          >
            <img
              src="/profile.jpg"
              alt="About Mayank"
              className="w-full h-full object-cover scale-125"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000";
              }}
            />
          </motion.div>
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold/20 rounded-tl-xl" />
        </div>

        {/* Content */}
        <div className="space-y-16">
          <div className="reveal">
            <h2 className="text-4xl md:text-5xl font-black mb-10 text-mask">The Bio.</h2>
            <div className="space-y-8 text-text-muted text-lg md:text-xl leading-relaxed max-w-[700px] font-body">
              <p className="reveal" style={{ transitionDelay: "100ms" }}>
                I built a production lead generation platform before completing my first semester.
              </p>
              <p className="reveal" style={{ transitionDelay: "200ms" }}>
                In my first year at GBU, I shipped a full-stack system for Prabhakar Infratech —
                AJAX forms, role-based admin panel, Excel/PDF export, PDO-secured database. It's live.
                It's being used.
              </p>
              <p className="reveal" style={{ transitionDelay: "300ms" }}>
                I lead media operations for NSS GBU, coordinated volunteer management for the Noida
                International Airport inauguration, and run photography and videography for Navrang.
              </p>
              <p className="reveal" style={{ transitionDelay: "400ms" }}>
                I study Computer Science Engineering at Gautam Buddha University. I don't separate
                design from development — I do both, and I think that shows in the work.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="reveal group p-8 bg-surface border border-border rounded-lg transition-all duration-500 hover:border-gold/30 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-4xl font-display font-bold text-gold mb-2 group-hover:scale-110 transition-transform origin-left">{stat.value}</div>
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-text-muted">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="reveal pt-16 border-t border-border/50">
            <h3 className="text-sm md:text-base font-mono text-gold uppercase tracking-[0.4em] mb-12">Academic Journey</h3>
            <div className="space-y-12">
              {education.map((item, i) => (
                <div
                  key={item.institution + item.degree}
                  className="reveal group flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-8 last:border-0"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="space-y-2">
                    <h4 className="text-white font-bold text-2xl md:text-3xl leading-tight tracking-tight group-hover:text-gold transition-all duration-300">
                      {item.institution}
                    </h4>
                    <p className="text-text-muted text-base md:text-lg font-medium tracking-wide uppercase">
                      {item.degree}
                    </p>
                  </div>
                  <div className="text-gold font-mono text-xs md:text-sm uppercase tracking-widest whitespace-nowrap bg-gold/5 px-4 py-1.5 rounded-full border border-gold/10">
                    {item.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

