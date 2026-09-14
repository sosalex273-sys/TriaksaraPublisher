import { Hero } from "@/components/Hero";
import fs from "fs";
import path from "path";

// Auto-copy generated hero image on server load
try {
  const srcImage = "C:\\Users\\Lenovo\\.gemini\\antigravity-ide\\brain\\18f9dfa3-2898-4c57-8336-41a2bc30d156\\hero_male_batik_1789400419174.png";
  const destImage = path.join(process.cwd(), "public", "images", "hero.png");
  if (fs.existsSync(srcImage)) {
    fs.copyFileSync(srcImage, destImage);
  }
} catch (err) {
  // Silent catch
}
import { Partner } from "@/components/Partner";
import { AboutUs } from "@/components/AboutUs";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Services } from "@/components/Services";
import { Products } from "@/components/Products";
import { PublicationFlow } from "@/components/PublicationFlow";
import { Statistics } from "@/components/Statistics";
import { Advantages } from "@/components/Advantages";
import { Legality } from "@/components/Legality";
import { CallForPaper } from "@/components/CallForPaper";
import { Institutions } from "@/components/Institutions";
import { Portfolio } from "@/components/Portfolio";
import { Testimonial } from "@/components/Testimonial";
import { FAQ } from "@/components/FAQ";

import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { MediaPartner } from "@/components/MediaPartner";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <Hero />
      <Services />
      <Products />
      <CallForPaper />
      <Institutions />
      <Partner />
      <Statistics />
      <AboutUs />
      <WhyChooseUs />
      <PublicationFlow />
      <Advantages />
      <Legality />
      <Portfolio />
      <Testimonial />
      <FAQ />

      <MediaPartner />
      <CTA />
      <Footer />
    </main>
  );
}
