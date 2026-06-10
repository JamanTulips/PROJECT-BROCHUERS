import Image from "next/image";
import styles from "./PartnersStandards.module.css";

const standards = [
  {
    src: "/img/statesflag.jpeg",
    alt: "United States flag with FDA cleared badge",
  },
  {
    src: "/img/japannext.jpeg",
    alt: "Japan flag with PMDA Japan badge",
  },
  {
    src: "/img/thaiflag.jpeg",
    alt: "Thailand flag with Thai regulatory badge",
  },
];

export default function PartnersStandards() {
  return (
    <section
      className={styles.section}
      aria-labelledby="partners-standards-title"
    >
      <h2 id="partners-standards-title" className={styles.srOnly}>
        Partners and Standards
      </h2>

      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.copy}>
            <h3>Partners</h3>
            <p>Collaborating with industry leaders to deliver world-class solutions.</p>
          </div>

          <div className={styles.card} aria-label="Strategic partner logos">
            <Image
              src="/img/psplogo.jpeg"
              alt="PSP logo"
              width={165}
              height={52}
              className={styles.pspLogo}
            />
            {/* <span className={styles.divider} aria-hidden="true" /> */}
            {/* <div className={styles.pspAsia} aria-label="PSP Asia logo">
              <span className={styles.pspMark} />
              <span>
                <strong>PSP</strong>
                <small>ASIA</small>
              </span>
            </div> */}
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.copy}>
            <h3>Global Standards</h3>
            <p>Rigorous regulatory approvals ensuring safety and quality.</p>
          </div>

          <div className={styles.card} aria-label="Global regulatory standards">
            <div className={styles.flagGroup}>
              {standards.map((standard) => (
                <Image
                  key={standard.src}
                  src={standard.src}
                  alt={standard.alt}
                  width={68}
                  height={50}
                  className={styles.flagLogo}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
