import PageHeader from "@/components/PageHeader";
import TestimonialsSection from "@/components/TestimonialsSection";

import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    title: "Testimonials",
    description:
        "Read client testimonials about Saiitek healthcare technology solutions — real feedback from hospitals and medical institutions using our PACS, RIS, and HIS platforms.",
    path: "/testimonials",
});

export default function Testimonials() {
    return (
        <main>
            <PageHeader
                title="Testimonials"
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Pages", href: "#" },
                    { label: "Testimonials", active: true },
                ]}
            />
            <TestimonialsSection />
        </main>
    );
}
