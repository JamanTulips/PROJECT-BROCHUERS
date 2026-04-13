import PageHeader from "@/components/PageHeader";
import BlogSection from "@/components/BlogSection";

export const metadata = {
    title: "Our Blog | Koju IT Solutions",
    description: "Explore the latest articles, tech insights, and IT industry news from the Koju IT Solutions team.",
};

export default function Blog() {
    return (
        <main>
            <PageHeader
                title="Our Blog"
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Pages", href: "#" },
                    { label: "Our Blog", active: true },
                ]}
            />
            <BlogSection />
        </main>
    );
}
