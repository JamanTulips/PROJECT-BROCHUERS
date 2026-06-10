import PageHeader from "@/components/PageHeader";
import ServicesSection from "@/components/ServicesSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "Explore Saiitek healthcare IT services including PACS, RIS, HIS automation, medical imaging workflows, AI diagnostics, and custom hospital software solutions.",
  path: "/services",
});

export default function Services() {
    return (
        <main>
            <PageHeader title="Services" breadcrumb={[{ label: "Home", href: "/" }, { label: "Pages", href: "#" }, { label: "Services", active: true }]} />
            <ServicesSection />
        </main>
    );
}
