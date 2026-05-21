import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Pillars } from "@/components/sections/Pillars";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Stats } from "@/components/sections/Stats";
import { Zones } from "@/components/sections/Zones";
import { Blog } from "@/components/sections/Blog";
import { Faq } from "@/components/sections/Faq";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <Pillars />
        <Projects />
        <Process />
        <Testimonials />
        <Stats />
        <Zones />
        <Blog />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
