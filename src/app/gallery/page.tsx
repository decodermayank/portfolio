import { Metadata } from "next";
import Link from "next/link";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Mayank Prabhakar | Photo Gallery",
  description: "Personal and professional photos of Mayank Prabhakar, Google Student Ambassador and Developer at Gautam Buddha University.",
};

// SEO OPTIMIZATION TIP: 
// Name your image files exactly as shown below before uploading them to the public/images folder.
// Google reads the file name AND the alt text to rank images!
const photos = [
  {
    src: "/images/mayank-prabhakar-navrang.jpg",
    alt: "Mayank Prabhakar at Navrang cultural event at Gautam Buddha University.",
  },
  {
    src: "/images/mayank-prabhakar-cyberpeace-speech.jpg",
    alt: "Mayank Prabhakar delivering speech at CyberPeace awareness event at Bharat Mandapam, New Delhi.",
  },
  {
    src: "/images/mayank-prabhakar-cyberpeace.jpg",
    alt: "Mayank Prabhakar participating in CyberPeace initiative event",
  },
  {
    src: "/images/mayank-prabhakar-cyberpeace-attendees.jpg",
    alt: "Mayank Prabhakar at Cyberpeace event",
  },
  {
    src: "/images/mayank-prabhakar-pic.jpg",
    alt: "Mayank PrabhakarGoogle Student Ambassador and B.Tech CSE student at Gautam Buddha University exploring web development, technology, and community impact.",
  },
  {
    src: "/images/mayank-prabhakar-abhivyanjana.jpg",
    alt: "Mayank Prabhakar at Abhivyanjana event at Gautam Buddha University",
  },
  {
    src: "/images/mayank-prabhakar-sahaj-yoga-host.png",
    alt: "Mayank Prabhakar hosting Sahaj Yoga event at Gautam Buddha University",
  },
];

export default function Gallery() {
  return (
    <main className="min-h-screen bg-bg py-32 px-6">
      <div className="max-w-[1100px] mx-auto">
        <Link href="/" className="text-gold font-mono uppercase tracking-widest text-sm hover:text-white transition-colors">
          ← Back to Portfolio
        </Link>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mt-8 mb-4">
          Photo Gallery.
        </h1>
        <p className="text-text-muted font-body text-lg mb-12 max-w-2xl">
          A collection of moments from my journey as a developer, community builder, and student.
        </p>

        <GalleryGrid photos={photos} />
      </div>
    </main>
  );
}
