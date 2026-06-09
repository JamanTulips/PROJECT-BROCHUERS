import styles from "./HealthcareHero.module.css";

const features = [
  {
    title: "PACS",
    description: "Effortless image storage and access anytime.",
  },
  {
    title: "RIS",
    description: "Optimized workflows for faster diagnoses.",
  },
  {
    title: "HIS automation",
    description: "Secure, compliant, and reliable platform.",
  },
];

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <article className={styles.featureCard}>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default function HealthcareHero() {
  return (
    <section className={styles.hero} aria-labelledby="healthcare-hero-title">
      <div className={styles.blurOne} />
      <div className={styles.blurTwo} />
      <div className={styles.blurThree} />

      <div className={styles.content}>
        <h1 id="healthcare-hero-title">Transforming Healthcare Through Technology</h1>
        <p className={styles.subtitle}>
          Seamless PACS, RIS, AI tools, and digital solutions tailored for modern care.
        </p>
        <a className={styles.cta} href="#contact">
          Get Started
        </a>
      </div>

      <div className={styles.features} aria-label="Healthcare technology features">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}
