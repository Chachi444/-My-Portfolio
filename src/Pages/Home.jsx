import { StarBackground } from "../Components/StarBackground";
import { Navbar } from "../Components/Navbar";
import { HeroSection } from "../Components/HeroSection";
import { AboutMe } from "../Components/AboutMe";
import { SkillsSection } from "../Components/SkillsSection";
import { ProjectsSection } from "../Components/ProjectsSection";
import { ContactSection } from "../Components/ContactSection";
import { Footer as FooterSection } from "../Components/FooterSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />
      
      {/* main content */}
      <main>
        <HeroSection />
        <AboutMe />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <FooterSection />
        </main>  

      </div>  
  );
};  
