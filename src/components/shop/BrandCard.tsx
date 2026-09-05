import type { Brand } from "../../data/brands";
import BrandLogo from "./BrandLogo";
import styles from "./BrandCard.module.css";

/** A single brand row in the Top Brands list. */
export default function BrandCard({
  brand,
  onClick,
}: {
  brand: Brand;
  onClick?: () => void;
}) {
  return (
    <button className={styles.card} onClick={onClick} type="button">
      <BrandLogo name={brand.name} color={brand.color} monogram={brand.monogram} />
      <div className={styles.body}>
        <span className={styles.name}>{brand.name}</span>
        <span className={styles.sub}>
          No-cost EMIs upto {brand.maxNoCostMonths} months
        </span>
      </div>
    </button>
  );
}
