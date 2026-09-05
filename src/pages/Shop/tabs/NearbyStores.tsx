import styles from "./EmptyTab.module.css";

/**
 * Nearby Stores — intentionally blank.
 * Per the assignment, this section requires no implementation.
 */
export default function NearbyStores() {
  return (
    <div className={styles.wrap}>
      <div className={styles.pin} aria-hidden>
        📍
      </div>
      <h3 className={styles.title}>Nearby Stores</h3>
      <p className={styles.sub}>
        Discover offline stores around you. Coming soon.
      </p>
    </div>
  );
}
