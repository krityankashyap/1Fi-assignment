import styles from "./ShopTabs.module.css";

export type ShopTabId = "top-brands" | "nearby-stores" | "marketplace";

const TABS: { id: ShopTabId; label: string }[] = [
  { id: "top-brands", label: "Top Brands" },
  { id: "nearby-stores", label: "Nearby Stores" },
  { id: "marketplace", label: "1Fi Marketplace" },
];

/** Segmented control for the three Shop sections. */
export default function ShopTabs({
  active,
  onChange,
}: {
  active: ShopTabId;
  onChange: (id: ShopTabId) => void;
}) {
  return (
    <div className={styles.track} role="tablist" aria-label="Shop sections">
      {TABS.map((t) => {
        const isActive = t.id === active;
        return (
          <button
            key={t.id}
            role="tab"
            aria-selected={isActive}
            className={`${styles.tab} ${isActive ? styles.active : ""}`}
            onClick={() => onChange(t.id)}
            type="button"
          >
            {t.label}
          </button>
        );
      })}
    </div>
  );
}
