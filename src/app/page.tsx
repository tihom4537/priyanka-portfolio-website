import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ResearchPublications from "@/components/ResearchPublications";
import TeachingPatents from "@/components/TeachingPatents";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ResearchPublications />
        <TeachingPatents />
        <Events />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
