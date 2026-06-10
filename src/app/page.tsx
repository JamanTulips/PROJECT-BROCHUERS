import HealthcareHero from "@/components/HealthcareHero";
import { createPageMetadata, siteConfig } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  path: "/",
  absoluteTitle: true,
});
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
      <HealthcareInnovation />
      <HealthcareServices />
      <ClinicalNetwork />
      <GalleryCarousel />
      <PartnersStandards />
      <ContactSection />
    </main>
  );
}
