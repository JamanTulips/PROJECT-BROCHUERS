import HealthcareHero from "@/components/HealthcareHero";
// import AboutSection from "@/components/AboutSection";
import HealthcareInnovation from "@/components/HealthcareInnovation";
// import ServicesSection from "@/components/ServicesSection";
import HealthcareServices from "@/components/HealthcareServices";
// import ProjectsSection from "@/components/ProjectsSection";
import ClinicalNetwork from "@/components/ClinicalNetwork";
import ContactSection from "@/components/ContactSection";
import BlogSection from "@/components/BlogSection";
import GalleryCarousel from "@/components/GalleryCarousel";
import PartnersStandards from "@/components/PartnersStandards";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.homePage}>
      <HealthcareHero />
      {/* <AboutSection /> */}
      <HealthcareInnovation />
      {/* <ServicesSection /> */}
      <HealthcareServices />
      {/* <ProjectsSection /> */}
      <ClinicalNetwork />
      {/* <BlogSection /> */}
      <GalleryCarousel />
      <PartnersStandards />
      {/* <TeamSection /> */}
      {/* <TestimonialsSection /> */}
      <ContactSection />
    </main>
  );
}
