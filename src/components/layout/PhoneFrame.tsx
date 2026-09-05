import type { ReactNode } from "react";
import styles from "./PhoneFrame.module.css";
import BottomNav from "./BottomNav";

/**
 * Wraps the whole app in a phone-width column so the web build reads as the
 * 1Fi mobile app. On a real phone it is full-bleed; on desktop it is a
 * centered ~420px column. Content scrolls; the bottom nav is pinned.
 */
export default function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className={styles.stage}>
      <div className={styles.phone}>
        <main className={`${styles.scroll} no-scrollbar`}>{children}</main>
        <BottomNav />
      </div>
    </div>
  );
}
