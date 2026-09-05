import type { ProductVariant } from "../../types/marketplace";
import { formatINR } from "../../utils/format";
import styles from "./VariantSelector.module.css";

/** Chip selector for a physical product's variants. */
export default function VariantSelector({
  variants,
  selectedId,
  onSelect,
}: {
  variants: ProductVariant[];
  selectedId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className={styles.wrap}>
      <span className={styles.label}>Choose a variant</span>
      <div className={styles.chips}>
        {variants.map((v) => {
          const active = v.id === selectedId;
          return (
            <button
              key={v.id}
              className={`${styles.chip} ${active ? styles.active : ""}`}
              onClick={() => onSelect(v.id)}
              type="button"
              aria-pressed={active}
            >
              <span className={styles.chipLabel}>{v.label}</span>
              <span className={styles.chipPrice}>{formatINR(v.price)}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
