import PageHeader from "@/components/PageHeader";
import ProjectsSection from "@/components/ProjectsSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Projects",
  description:
    "View Saiitek's completed healthcare technology projects — PACS deployments, RIS integrations, HIS automation, and digital transformation for medical institutions.",
  path: "/projects",
});

export default function Projects() {
    return (
        <main>
            <PageHeader title="Projects" breadcrumb={[{ label: "Home", href: "/" }, { label: "Pages", href: "#" }, { label: "Projects", active: true }]} />
            <ProjectsSection />
        </main>
    );
}
