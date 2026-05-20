"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";

const navLinks = [
  { name: "Work", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "glass py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-[1100px] mx-auto flex items-center justify-between">
        <Link href="/" className="font-display text-2xl font-bold text-white tracking-tighter">
          MP
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-mono uppercase tracking-widest text-text-muted hover:text-gold transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="#contact"
            className="px-5 py-2 border border-gold text-gold text-sm font-mono uppercase tracking-widest rounded-sm hover:bg-gold hover:text-bg transition-all duration-300"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text hover:text-gold transition-colors"
          onClick={() => setMobileMenuOpen(true)}
        >
          <IconMenu2 size={24} />
        </button>
      </div>
    </nav>

    {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-bg flex flex-col items-center justify-center gap-6 animate-in fade-in duration-300">
          <button
            className="absolute top-6 right-6 text-text hover:text-gold transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            <IconX size={32} />
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-3xl font-display font-bold text-white hover:text-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="mt-2 px-8 py-3 border border-gold text-gold text-lg font-mono uppercase tracking-widest rounded-sm hover:bg-gold hover:text-bg transition-all duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Hire Me
          </Link>
        </div>
      )}
    </>
  );
}
