import { CheckCircle } from "../ui/Icons";
import styles from "./InfoSection.module.css";

/**
 * Card that renders either numbered steps ("How to use") or checkmark
 * bullets ("Terms and Conditions"), matching the reference screens.
 */
export default function InfoSection({
  title,
  items,
  variant,
}: {
  title: string;
  items: string[];
  variant: "steps" | "checks";
}) {
  return (
    <section className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>
        {items.map((item, i) => (
          <li key={i} className={styles.item}>
            {variant === "steps" ? (
              <span className={styles.num}>{i + 1}</span>
            ) : (
              <CheckCircle size={20} className={styles.check} />
            )}
            <span className={styles.text}>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
