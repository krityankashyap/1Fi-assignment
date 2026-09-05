import { SparkleIcon } from "../ui/Icons";
import StatusBar from "../layout/StatusBar";
import styles from "./ShopHero.module.css";

/**
 * The purple "Shop today, Pay later using Mutual funds" banner at the top
 * of the Shop page. Includes a faux mobile status bar so the web build
 * reads like the native 1Fi app.
 */
export default function ShopHero() {
  return (
    <header className={styles.hero}>
      <StatusBar tone="light" />
      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className={styles.badge}>
            <SparkleIcon size={14} />
            NO-COST EMIs
          </span>
          <h1 className={styles.title}>
            Shop today,
            <br />
            <em>Pay later</em> using
            <br />
            Mutual funds.
          </h1>
          <p className={styles.sub}>
            No credit score required. No interest. Backed by your investments.
          </p>
        </div>
        <div className={styles.art} aria-hidden>
          <span className={styles.bag}>🛍️</span>
          <span className={`${styles.item} ${styles.i1}`}>📱</span>
          <span className={`${styles.item} ${styles.i2}`}>💻</span>
          <span className={`${styles.item} ${styles.i3}`}>🚗</span>
          <span className={`${styles.item} ${styles.i4}`}>🏍️</span>
          <span className={`${styles.confetti} ${styles.c1}`} />
          <span className={`${styles.confetti} ${styles.c2}`} />
          <span className={`${styles.confetti} ${styles.c3}`} />
        </div>
      </div>
    </header>
  );
}
