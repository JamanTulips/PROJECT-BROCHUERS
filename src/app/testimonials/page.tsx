import PageHeader from "@/components/PageHeader";
import TestimonialsSection from "@/components/TestimonialsSection";

export const metadata = {
    title: "Testimonials | Koju IT Solutions",
    description: "Read what our clients say about Koju IT Solutions. Real feedback from businesses we have helped grow through technology.",
};

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
