import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import styles from "./PhoneFrame.module.css";
import BottomNav from "./BottomNav";

/**
 * Wraps the whole app in a phone-width column so the web build reads as the
 * 1Fi mobile app. On a real phone it is full-bleed; on desktop it is a
 * centered ~420px column. Content scrolls; the bottom tab nav is pinned on
 * top-level tabs but hidden on pushed screens (e.g. product detail).
 */
export default function PhoneFrame({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const showNav = !pathname.startsWith("/shop/marketplace/");

  return (
    <div className={styles.stage}>
      <div className={styles.phone}>
        <main
          className={`${styles.scroll} no-scrollbar`}
          data-nav={showNav ? "on" : "off"}
        >
          {children}
        </main>
        {showNav && <BottomNav />}
      </div>
    </div>
  );
}
