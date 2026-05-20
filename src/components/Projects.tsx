"use client";

import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { IconExternalLink, IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";
import { projects } from "@/lib/projects";

export default function Projects() {
  const sectionRef = useIntersectionObserver();
  const featuredProject = projects.find(p => p.featured) || projects[0];
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-bg">
      <div className="max-w-[1100px] mx-auto px-6">
        
        {/* Header */}
        <div className="reveal mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-mask uppercase tracking-tighter">
            The Work.
          </h2>
          <p className="text-text-muted text-lg max-w-2xl leading-relaxed">
            A selection of projects where I bridge the gap between complex engineering and intentional design.
          </p>
        </div>

        {/* Structured Projects List - All Full-Width */}
        <div className="space-y-12">
          {[
            projects.find(p => p.slug === "real-estate-platform"),
            projects.find(p => p.slug === "ngo-awareness"),
            ...projects.filter(p => p.slug !== "real-estate-platform" && p.slug !== "ngo-awareness")
          ].map((project, i) => {
            if (!project) return null;
            return (
              <motion.article 
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="bg-surface border border-border rounded-2xl p-8 md:p-14 relative overflow-hidden group hover:border-gold/30 transition-all duration-500 shadow-xl"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 select-none pointer-events-none">
                   <span className="text-8xl font-black text-white">0{i + 1}</span>
                </div>
                
                <div className="relative z-10">
                  <div className="flex flex-wrap items-center gap-4 mb-8">
                    {project.featured && (
                      <span className="text-[10px] font-mono text-gold uppercase tracking-[0.3em] bg-gold/5 px-3 py-1 rounded-full border border-gold/10">
                        Featured Project
                      </span>
                    )}
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.3em]">
                      {project.type}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight group-hover:text-gold transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gold/60 font-mono text-xs uppercase tracking-widest mb-6">
                        {project.subtitle}
                      </p>
                      <p className="text-text-muted text-lg leading-relaxed mb-8">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-10">
                      <div className="space-y-4">
                        <h4 className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map(tech => (
                            <span key={tech} className="text-[10px] font-mono text-white/60 border border-white/5 bg-white/[0.03] px-3 py-1.5 rounded-md">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-6 pt-4">
                        <Link 
                          href={`/projects/${project.slug}`}
                          className="bg-gold text-bg px-8 py-3 rounded-lg font-bold text-sm hover:bg-white transition-all duration-300 shadow-[0_10px_30px_rgba(212,175,55,0.15)] uppercase tracking-widest"
                        >
                          EXPLORE IT
                        </Link>
                        <div className="flex gap-5">
                          <a href={project.links.github} className="text-text-muted hover:text-white transition-colors">
                            <IconBrandGithub size={22} />
                          </a>
                          <a href={project.links.live} className="text-text-muted hover:text-white transition-colors">
                            <IconExternalLink size={22} />
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
