"use client";

import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const experiences = [
  {
    date: "May 2026 – Present",
    role: "Google Student Ambassador",
    company: "Google Gemini",
    description: "Representing Google Gemini AI on campus by organizing technical workshops, driving AI awareness, and cultivating a next-generation tech community at Gautam Buddha University.",
    icon: "🌟"
  },
  {
    date: "May 2026 – Present",
    role: "AI Web Development Intern",
    company: "InAmigos Foundation (IAF)",
    description: "Focusing on Artificial Intelligence (AI) and Generative AI integration for modern web applications during a professional internship.",
    icon: "🤖"
  },
  {
    date: "May 2026 – Present",
    role: "Campus Ambassador",
    company: "PW (PhysicsWallah)",
    description: "Representing one of India's leading EdTech platforms to foster a technical learning community and drive brand engagement on campus.",
    icon: "🎓"
  },
  {
    date: "May 2026 – Present",
    role: "Campus Ambassador",
    company: "Imagine.bo",
    description: "Collaborating with Imagine.bo to promote freelance opportunities and technical skill-building among the student community.",
    icon: "🚀"
  },
  {
    date: "Jan 2026 – Present",
    role: "Media & Social Media Lead",
    company: "NSS GBU",
    description: "Leading digital outreach and social media operations. Coordinated volunteer management for the Noida International Airport inauguration (~700 volunteers).",
    icon: "📢"
  },
  {
    date: "Sept 2025 – Present",
    role: "Photography & Videography Lead",
    company: "Navrang (SOICT, GBU)",
    description: "Managing professional media production and high-quality visual documentation for university-level tech and cultural events.",
    icon: "📸"
  }
];

export default function Experience() {
  const sectionRef = useIntersectionObserver();

  return (
    <section id="experience" ref={sectionRef} className="py-24 bg-bg">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="reveal mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-mask uppercase tracking-tighter">
            Experience.
          </h2>
          <p className="text-text-muted text-lg max-w-2xl leading-relaxed">
            Professional roles and leadership positions where I&apos;ve applied my technical and operational skills.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Chain Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-gold/50 via-gold/20 to-transparent md:-translate-x-1/2" />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <motion.article
                key={exp.role + exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                className={`relative flex flex-col md:flex-row items-start ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Chain Dot */}
                <div className="absolute left-4 md:left-1/2 top-0 w-3 h-3 bg-gold rounded-full border-4 border-bg md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(212,175,55,0.5)]" />

                <div className={`w-full md:w-1/2 ${i % 2 === 0 ? "md:pl-16 text-left" : "md:pr-16 md:text-right"} pl-12`}>
                  <div className="bg-surface border border-border p-8 rounded-2xl hover:border-gold/30 transition-all duration-500 group relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gold/10 group-hover:bg-gold/40 transition-all" />
                    
                    <div className="flex flex-col gap-1 mb-4">
                      <span className="text-gold font-mono text-[10px] uppercase tracking-[0.3em]">
                        {exp.date}
                      </span>
                      <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-gold transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-white/60 font-medium text-lg italic">
                        {exp.company}
                      </p>
                    </div>

                    <p className="text-text-muted text-base leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                      {exp.description}
                    </p>
                  </div>
                </div>
                
                {/* Empty Space for the other side on Desktop */}
                <div className="hidden md:block md:w-1/2" />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
