import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/Gallery";
import { Teams } from "@/components/Teams";
import { History } from "@/components/History";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
     <main>
      <Navbar/>
      <Hero/>
      <Gallery/>
      <Teams/>
      <History/>
      <Contact/>
     </main>
  );
}
