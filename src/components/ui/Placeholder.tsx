import styles from "./Placeholder.module.css";

/**
 * Generic "screen not part of this assignment" placeholder.
 * Used for Home / EMI Dues / Limit / Profile and the blank Shop sub-tabs
 * (Top Brands and Nearby Stores intentionally have no implementation).
 */
export default function Placeholder({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className={styles.wrap}>
      <div className={styles.glyph} aria-hidden>
        1Fi
      </div>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
