import PageHeader from "@/components/PageHeader";
import AboutSection from "@/components/AboutSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Us",
  description:
    "Learn about Saiitek Solution — a Nepal-based healthcare technology company delivering PACS, RIS, HIS automation, and AI-powered tools for hospitals and diagnostic centers.",
  path: "/about",
});

export default function About() {
    return (
        <main>
            <PageHeader title="About Us" breadcrumb={[{ label: "Home", href: "/" }, { label: "Pages", href: "#" }, { label: "About", active: true }]} />
            <AboutSection />
        </main>
    );
}
