import styles from "./HealthcareServices.module.css";

export default function HealthcareServices() {
  return (
    <section
      id="services"
      className={styles.section}
      aria-labelledby="healthcare-services-title"
    >
      <div className={styles.header}>
        <h2 id="healthcare-services-title">Our Services</h2>
        <p>Empowering healthcare with smart, seamless technology solutions.</p>
      </div>

      <div className={styles.grid}>
        <article className={styles.leftCard}>
          <div className={styles.leftTop}>
            <h3>HIS automation</h3>
            <p>
              Simplifying hospital operations with seamless digital automation
            </p>
          </div>
          <img
            src="/img/hisworkflow.jpeg"
            alt="Healthcare analytics dashboard"
            className={styles.cardImage}
          />
        </article>

        <article className={styles.rightCard}>
          <div className={styles.rightTop}>
            <h3>PACS &amp; RIS</h3>
            <p>
              Streamline imaging and patient records with secure, fast access.
            </p>
          </div>
          <img
            src="/img/geminimobgenerated.png"
            alt="Medical diagnostic equipment"
            className={styles.cardImage}
          />
        </article>
      </div>
    </section>
  );
}
