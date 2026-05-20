import type { Metadata } from "next";
import { Syne, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Mayank Prabhakar | Google Student Ambassador",
  description: "Portfolio of Mayank Prabhakar, Google Student Ambassador and B.Tech CSE student at Gautam Buddha University exploring web development, technology, and community impact.",
  keywords: [
    "Mayank Prabhakar",
    "Mayank Prabhakar Portfolio",
    "Mayank Prabhakar GBU",
    "Mayank Prabhakar Developer",
    "i Mayank Prabhakar",
    "Mayank Prabhakar NSS",
    "Gautam Buddha University",
    "Google Student Ambassador GBU",
    "Google Student Ambassador Mayank",
    "mayank Google Student Ambassador",
    "Google Gemini Ambassador mayank",
    "mayank Google Gemini Ambassador",
    "mayank Google Gemini Ambassador gbu",
    "Google Student Ambassador gautam buddha university",
    "Arduino Projects for Engineering Students",
    "Smart Queue Management System Arduino",
    "nss gbu",
    "gbu nss",
    "gbu students",
    "Full Stack Developer",
    "Next.js Developer",
    "AI Web Development Intern"
  ],
  authors: [{ name: "Mayank Prabhakar" }],
  creator: "Mayank Prabhakar",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.mayank-prabhakar.me",
    title: "Mayank Prabhakar | Google Student Ambassador",
    description: "Portfolio of Mayank Prabhakar, Google Student Ambassador and B.Tech CSE student at Gautam Buddha University exploring web development, technology, and community impact.",
    siteName: "Mayank Prabhakar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayank Prabhakar | Google Student Ambassador",
    description: "Portfolio of Mayank Prabhakar, Google Student Ambassador and B.Tech CSE student at Gautam Buddha University exploring web development, technology, and community impact.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mayank Prabhakar",
    url: "https://www.mayank-prabhakar.me",
    jobTitle: "Full Stack Developer & Google Gemini Student Ambassador",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Gautam Buddha University",
      alternateName: "GBU"
    },
    knowsAbout: ["Next.js", "React", "Artificial Intelligence", "Generative AI", "Web Development"]
  };

  return (
    <html
      lang="en"
      className={`${syne.variable} ${inter.variable} ${spaceMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#0d0d0b] text-[#e8e6df]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

