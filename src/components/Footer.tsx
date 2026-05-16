import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border mt-12">
      <div className="max-w-[1100px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="font-display text-xl font-bold text-white tracking-tighter">
          Mayank Prabhakar
        </div>

        <div className="flex items-center gap-6">
          {["GitHub", "LinkedIn", "Instagram", "X"].map((social) => (
            <a 
              key={social} 
              href="#" 
              className="text-xs font-mono uppercase tracking-[0.15em] text-text-muted hover:text-gold transition-colors"
            >
              {social}
            </a>
          ))}
        </div>

        <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted">
          © {new Date().getFullYear()} Mayank Prabhakar.
        </div>
      </div>
      
      <div className="max-w-[1100px] mx-auto px-6 mt-8 text-center md:text-right">
        <p className="text-[9px] font-mono uppercase tracking-[0.2em] text-text-muted/50">
          Designed & Built by Mayank Prabhakar
        </p>
      </div>
    </footer>
  );
}
