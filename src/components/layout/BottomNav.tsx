import { NavLink } from "react-router-dom";
import styles from "./BottomNav.module.css";
import {
  HomeIcon,
  ShopIcon,
  EmiIcon,
  LimitIcon,
  ProfileIcon,
} from "../ui/Icons";

const items = [
  { to: "/home", label: "Home", Icon: HomeIcon },
  { to: "/shop", label: "Shop", Icon: ShopIcon },
  { to: "/emi-dues", label: "EMI Dues", Icon: EmiIcon },
  { to: "/limit", label: "Limit", Icon: LimitIcon },
  { to: "/profile", label: "Profile", Icon: ProfileIcon },
];

export default function BottomNav() {
  return (
    <nav className={styles.nav} aria-label="Primary">
      {items.map(({ to, label, Icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `${styles.item} ${isActive ? styles.active : ""}`
          }
        >
          {({ isActive }) => (
            <>
              <span className={styles.indicator} data-on={isActive} />
              <Icon size={23} strokeWidth={isActive ? 2.2 : 1.9} />
              <span className={styles.label}>{label}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
