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
  title: "Mayank Prabhakar | Developer & Google Gemini Ambassador",
  description: "Portfolio of Mayank Prabhakar, a Full Stack Developer, AI Web Development Intern, and Google Gemini Student Ambassador at Gautam Buddha University (GBU).",
  keywords: [
    "Mayank Prabhakar",
    "Mayank Prabhakar GBU",
    "Mayank Prabhakar Gautam Buddha University",
    "Google Gemini Student Ambassador",
    "Full Stack Developer",
    "Next.js Developer",
    "AI Web Development Intern",
    "Web Developer Noida",
    "Student Developer GBU"
  ],
  authors: [{ name: "Mayank Prabhakar" }],
  creator: "Mayank Prabhakar",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.mayank-prabhakar.me",
    title: "Mayank Prabhakar | Developer & AI Enthusiast",
    description: "Portfolio of Mayank Prabhakar, Full Stack Developer and Google Gemini Student Ambassador at GBU.",
    siteName: "Mayank Prabhakar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayank Prabhakar | Developer",
    description: "Portfolio of Mayank Prabhakar, Full Stack Developer and Google Gemini Student Ambassador at GBU.",
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

