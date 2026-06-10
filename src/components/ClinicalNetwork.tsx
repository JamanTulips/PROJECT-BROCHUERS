import styles from "./ClinicalNetwork.module.css";

const logoRows = [
  [
    {
      src: "/img/grandeinternational.jpeg",
      alt: "Grande International Hospital logo",
    },
    { src: "/img/nepalgunj.jpeg", alt: "Nepalgunj Medical College logo" },
    { src: "/img/nepalmediciti.jpeg", alt: "Nepal Mediciti logo" },
    { src: "/img/bandb.jpeg", alt: "B&B Hospital logo" },
    { src: "/img/sathkira.jpeg", alt: "Sathkira Medical College logo" },
  ],
  [
    { src: "/img/dharma.jpeg", alt: "Dharma medical center logo" },
    { src: "/img/nationalmedical.jpeg", alt: "National Medical College logo" },
    {
      src: "/img/purbancalcancer.jpeg",
      alt: "Purbanchal Cancer Hospital logo",
    },
    { src: "/img/biratmedical.jpeg", alt: "Birat Medical College logo" },
  ],
  [
    { src: "/img/hrdc.jpeg", alt: "HRDC logo" },
    { src: "/img/nepalcancer.jpeg", alt: "Nepal Cancer Hospital logo" },
    {
      src: "/img/kathmandumedical.jpeg",
      alt: "Kathmandu Medical College logo",
    },
    { src: "/img/nobelmedical.jpeg", alt: "Nobel Medical College logo" },
    {
      src: "/img/dhakamedical.jpeg",
      alt: "Dhaka Medical College Hospital logo",
    },
  ],
];

export default function ClinicalNetwork() {
  return (
    <section
      className={styles.section}
      aria-labelledby="clinical-network-title"
    >
      <div className={styles.networkPanel}>
        <div className={styles.header}>
          <h2 id="clinical-network-title">Our Hospital Network</h2>
          <p className="text-muted">
            Trusted by the leading hospitals and medical institution across
            Nepal and Bangladesh
          </p>
        </div>

        <div
          className={styles.logoGrid}
          aria-label="Clinical network hospital logos"
        >
          {logoRows.map((row, rowIndex) => (
            <div
              className={styles.logoRow}
              key={`clinical-network-row-${rowIndex}`}
            >
              {row.map((logo) => (
                <div className={styles.logoCard} key={logo.src}>
                  <img src={logo.src} alt={logo.alt} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bottomPanel}>
        <h3>Trusted Worldwide</h3>
        <p>Delivering advanced medical image solution across Asia and beyond</p>
      </div>
    </section>
  );
}
