import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: "--font-jakarta" 
});

export const metadata: Metadata = {
  title: "Triaksara Publisher - Premium Publishing Company",
  description: "Layanan publikasi jurnal, buku, dan HKI profesional terbaik.",
  keywords: ["Jurnal", "Publikasi", "HKI", "Buku", "Triaksara Publisher"],
  authors: [{ name: "Triaksara Publisher" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://triaksarapublisher.id",
    title: "Triaksara Publisher - Premium Publishing",
    description: "Layanan publikasi terbaik untuk kebutuhan akademik dan profesional.",
    siteName: "Triaksara Publisher",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased bg-slate-50 text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
