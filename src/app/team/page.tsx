import PageHeader from "@/components/PageHeader";
import TeamSection from "@/components/TeamSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Our Team",
  description:
    "Meet the Saiitek team behind our healthcare technology solutions — experts in PACS, RIS, HIS automation, and medical software development in Nepal.",
  path: "/team",
});

export default function Team() {
    return (
        <main>
            <PageHeader
                title="Our Team"
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Pages", href: "#" },
                    { label: "Our Team", active: true },
                ]}
            />
            <TeamSection />
        </main>
    );
}
