import PageHeader from "@/components/PageHeader";
import BlogSection from "@/components/BlogSection";

import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    title: "Our Blog",
    description:
        "Read the latest healthcare technology insights, PACS and RIS updates, and digital health articles from the Saiitek team.",
    path: "/blog",
});

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
