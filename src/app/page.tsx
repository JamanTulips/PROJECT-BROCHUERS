import HealthcareHero from "@/components/HealthcareHero";
// import AboutSection from "@/components/AboutSection";
import HealthcareInnovation from "@/components/HealthcareInnovation";
// import ServicesSection from "@/components/ServicesSection";
import HealthcareServices from "@/components/HealthcareServices";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import BlogSection from "@/components/BlogSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main>
      <HealthcareHero />
      {/* <AboutSection /> */}
      <HealthcareInnovation />
      {/* <ServicesSection /> */}
      <HealthcareServices />
      <ProjectsSection />
      <BlogSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
