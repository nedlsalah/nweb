import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Certifications from "@/components/sections/Certifications";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Page() {
  return (
    <>
      <Hero /><Services /><Work /><About /><Process />
      <Experience /><Skills /><Certifications /><Testimonials /><Contact />
    </>
  );
}
