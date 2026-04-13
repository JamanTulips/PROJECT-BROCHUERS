import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import BlogSection from "@/components/BlogSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <BlogSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
