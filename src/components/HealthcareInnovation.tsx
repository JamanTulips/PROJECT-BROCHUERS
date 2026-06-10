import styles from "./HealthcareInnovation.module.css";

export default function HealthcareInnovation() {
  return (
    <section
      id="about"
      className={styles.section}
      aria-labelledby="healthcare-innovation-title"
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 id="healthcare-innovation-title">
            Accuracy Powered by AI, Valued by Healthcare Institutions Worldwide
          </h2>
          <p>
            Over 3000 hospital trusts rely on our solution for transforming
            digital healthcare.
          </p>
        </div>

        <div className={styles.grid}>
          <div>
            <h3>Empowering Healthcare Innovation</h3>
          </div>

          <div className={styles.copyBlock}>
            <p>
              At saiitek, we blend cutting-edge technology with imaging
              expertise to transform healthcare delivery through smart, seamless
              digital solutions.
            </p>
            <strong>5000+ doctors rely on our solutions everyday.</strong>
          </div>
        </div>

        <img
          src="/img/officegenerated.png"
          alt="Medical professionals analyzing digital health scans on dual monitors"
          className={styles.image}
        />
      </div>
    </section>
  );
}
