import styles from "./StatusBar.module.css";

/**
 * Faux mobile status bar (time + signal/wifi/battery) so the web build
 * looks like the native app. `tone` flips colours for dark vs light
 * backgrounds (e.g. over the purple hero vs a white header).
 */
export default function StatusBar({ tone = "dark" }: { tone?: "light" | "dark" }) {
  return (
    <div className={`${styles.bar} ${tone === "light" ? styles.light : styles.dark}`}>
      <span className={styles.time}>11:09</span>
      <div className={styles.right}>
        {/* signal */}
        <svg width="17" height="12" viewBox="0 0 17 12" aria-hidden>
          <rect x="0" y="8" width="3" height="4" rx="1" fill="currentColor" />
          <rect x="4.5" y="5.5" width="3" height="6.5" rx="1" fill="currentColor" />
          <rect x="9" y="3" width="3" height="9" rx="1" fill="currentColor" />
          <rect x="13.5" y="0.5" width="3" height="11.5" rx="1" fill="currentColor" />
        </svg>
        <span className={styles.net}>5G</span>
        {/* battery */}
        <svg width="26" height="13" viewBox="0 0 26 13" aria-hidden>
          <rect x="0.5" y="0.5" width="22" height="12" rx="3" fill="none" stroke="currentColor" strokeOpacity="0.5" />
          <rect x="2" y="2" width="16" height="9" rx="1.5" fill="currentColor" />
          <rect x="24" y="4" width="2" height="5" rx="1" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}
