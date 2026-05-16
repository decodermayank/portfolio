"use client";

import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { 
  IconCamera, 
  IconUsers, 
  IconPlane, 
  IconBolt, 
  IconTent, 
  IconTrophy
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const leadershipItems = [
  {
    title: "NSS Media Lead",
    org: "GBU Unit",
    desc: "Led media strategy and social documentation across 300+ NSS volunteers at GBU.",
    icon: <IconCamera size={28} />,
    size: "large"
  },
  {
    title: "Noida Airport Inauguration",
    org: "Event Coordination",
    desc: "Coordinated and managed ~700 GBU student volunteers for national infrastructure event.",
    icon: <IconPlane size={28} />,
    size: "medium"
  },
  {
    title: "Navrang Media Lead",
    org: "SOICT, GBU",
    desc: "Managed all media operations for SOICT's cultural events.",
    icon: <IconUsers size={28} />,
    size: "medium"
  },
  {
    title: "Yuva Diwas Media Lead",
    org: "National Event",
    desc: "Handled visual documentation and social media for national youth event.",
    icon: <IconTrophy size={28} />,
    size: "small"
  },
  {
    title: "NSS Special Camp Leadership",
    org: "GBU Unit",
    desc: "Led 7-day special camp with ~300 students and volunteers.",
    icon: <IconTent size={28} />,
    size: "small"
  },
  {
    title: "Ignition Tech Fest 2.0",
    org: "Student Coordinator",
    desc: "Monitored hackathon participants and supported technical event flow.",
    icon: <IconBolt size={28} />,
    size: "small"
  }
];

export default function Leadership() {
  const sectionRef = useIntersectionObserver();

  return (
    <section id="leadership" ref={sectionRef} className="py-section">
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="reveal text-4xl md:text-5xl font-black mb-16 text-mask">Leadership.</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leadershipItems.map((item, i) => (
            <motion.div 
              key={item.title} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className={cn(
                "group p-10 bg-surface border border-border rounded-xl transition-all duration-500 hover:border-gold/30 hover:shadow-2xl flex flex-col justify-between min-h-[280px]",
                item.size === "large" ? "md:col-span-2" : "md:col-span-1"
              )}
            >
              <div>
                <div className="text-gold mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform inline-block p-4 bg-gold/5 rounded-2xl border border-gold/10">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-2 tracking-tight group-hover:text-gold transition-colors">{item.title}</h3>
                <div className="text-[10px] font-mono text-gold/60 uppercase tracking-[0.2em] mb-6">{item.org}</div>
              </div>
              <p className="text-text-muted text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">{item.desc}</p>
            </motion.div>
          ))}

          {/* Campus Ambassadors Small Item */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 bg-surface border border-border rounded-xl md:col-span-3 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:border-gold/30 transition-all duration-500"
          >
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-2 tracking-tight">Campus Ambassadors</h3>
              <p className="text-text-muted text-sm font-body">Representing industry leaders and fostering community on campus.</p>
            </div>
            <div className="flex flex-wrap gap-4">
               <span className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-text-muted hover:border-gold/30 hover:text-white transition-all cursor-default">PW Campus Ambassador</span>
               <span className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-text-muted hover:border-gold/30 hover:text-white transition-all cursor-default">Imagine.bo Campus Ambassador</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

