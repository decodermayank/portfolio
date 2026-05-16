"use client";

import { useParams, useRouter } from "next/navigation";
import { projects } from "@/lib/projects";
import { motion } from "framer-motion";
import { IconArrowLeft, IconBrandGithub, IconExternalLink, IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg text-white">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-text-muted mb-8 text-xl">Project not found</p>
          <Link href="/" className="text-gold hover:underline flex items-center justify-center gap-2">
            <IconArrowLeft size={20} /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-bg relative selection:bg-gold/30">
      <div className="grain pointer-events-none" />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-gold/10 to-transparent blur-[120px] pointer-events-none" />
        
        <div className="max-w-[1100px] mx-auto px-6 relative z-10">
          <motion.button 
            onClick={() => router.back()}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-text-muted hover:text-gold transition-colors mb-12 font-mono text-xs uppercase tracking-widest group"
          >
            <IconArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-gold font-mono text-xs uppercase tracking-[0.4em] mb-4">{project.type}</div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white leading-[0.9] mb-8 tracking-tighter">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-text-muted leading-relaxed max-w-2xl font-light">
                {project.subtitle}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="px-4 py-1.5 bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-text-muted rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-8 pt-4">
                {project.links.github && (
                  <a href={project.links.github} className="flex items-center gap-3 text-white hover:text-gold transition-all duration-300 text-xs font-mono uppercase tracking-[0.2em] group/link">
                    <IconBrandGithub size={22} className="group-hover/link:rotate-12 transition-transform" /> Github
                  </a>
                )}
                {project.links.live && (
                  <a href={project.links.live} className="flex items-center gap-3 text-white hover:text-gold transition-all duration-300 text-xs font-mono uppercase tracking-[0.2em] group/link">
                    <IconExternalLink size={22} className="group-hover/link:translate-x-1 transition-transform" /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-32">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-24">
            
            {/* Left Column: Details */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-20"
            >
              <div>
                <h2 className="text-3xl font-display font-bold text-white mb-8 flex items-center gap-4">
                  <span className="text-gold text-sm font-mono">01</span> Introduction
                </h2>
                <p className="text-lg text-text-muted leading-relaxed">
                  {project.content.introduction}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-display font-bold text-white mb-8 flex items-center gap-4">
                  <span className="text-gold text-sm font-mono">02</span> Aim & Objectives
                </h2>
                <ul className="space-y-6">
                  {project.content.aimAndObjectives.map((obj, i) => (
                    <li key={i} className="flex gap-4 text-lg text-text-muted leading-relaxed">
                      <IconChevronRight size={24} className="text-gold flex-shrink-0 mt-1" />
                      {obj}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-display font-bold text-white mb-8 flex items-center gap-4">
                  <span className="text-gold text-sm font-mono">03</span> Working Principle
                </h2>
                <div className="space-y-8">
                  {project.content.workingPrinciple.map((step, i) => (
                    <div key={i} className="bg-surface/50 border border-border p-8 rounded-xl hover:border-gold/30 transition-colors">
                      <div className="text-gold font-mono text-[10px] uppercase tracking-widest mb-2">Step {i+1}</div>
                      <h3 className="text-xl font-bold text-white mb-3">{step.step}</h3>
                      <p className="text-text-muted leading-relaxed">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column: Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-16"
            >
              {/* Components */}
              <div className="bg-surface border border-border p-10 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-gold/10 transition-colors" />
                <h3 className="text-xl font-display font-bold text-white mb-8 uppercase tracking-widest border-b border-white/10 pb-4">Components</h3>
                <div className="space-y-6">
                  {project.content.components.map((comp, i) => (
                    <div key={i} className="relative z-10">
                      <div className="text-white font-bold text-sm mb-1">{comp.name}</div>
                      <div className="text-text-muted text-xs leading-relaxed uppercase tracking-wider">{comp.role}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div>
                <h3 className="text-xl font-display font-bold text-white mb-8 uppercase tracking-widest">Applications</h3>
                <div className="flex flex-col gap-4">
                  {project.content.applications.map((app, i) => (
                    <div key={i} className="flex items-center gap-3 text-text-muted hover:text-white transition-colors cursor-default">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                      <span className="text-sm font-mono uppercase tracking-wider">{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Future Scope */}
              <div className="p-8 border-l-2 border-gold/30 bg-gold/5 rounded-r-xl">
                <h3 className="text-xl font-display font-bold text-white mb-6 uppercase tracking-widest">Future Scope</h3>
                <ul className="space-y-4">
                  {project.content.futureScope.map((scope, i) => (
                    <li key={i} className="text-xs text-text-muted leading-relaxed uppercase tracking-widest">
                      • {scope}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
