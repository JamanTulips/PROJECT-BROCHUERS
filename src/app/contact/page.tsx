import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact Us",
  description:
    "Contact Saiitek Solution in Lalitpur, Nepal for healthcare IT consultations. Reach us for PACS, RIS, HIS automation, and custom medical software solutions.",
  path: "/contact",
});

export default function Contact() {
    return (
        <main>
            <PageHeader title="Contact Us" breadcrumb={[{ label: "Home", href: "/" }, { label: "Pages", href: "#" }, { label: "Contact", active: true }]} />
            <ContactSection />
        </main>
    );
}
