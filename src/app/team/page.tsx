import PageHeader from "@/components/PageHeader";
import TeamSection from "@/components/TeamSection";

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
