import type { Product } from "../../types/marketplace";
import { startingPrice, hasPriceRange } from "../../utils/product";
import { buildEmiPlans, startsAt } from "../../utils/emi";
import { formatINR } from "../../utils/format";
import ProductImage from "./ProductImage";
import { Skeleton } from "../ui/Skeleton";
import styles from "./ProductCard.module.css";

/** A product tile in the Marketplace listing grid. */
export default function ProductCard({
  product,
  onClick,
}: {
  product: Product;
  onClick?: () => void;
}) {
  const price = startingPrice(product);
  const range = hasPriceRange(product);
  const lowestEmi = startsAt(buildEmiPlans(price, product.noCostUpto));

  return (
    <button className={styles.card} onClick={onClick} type="button">
      <ProductImage emoji={product.emoji} color={product.color} />

      <div className={styles.body}>
        <span className={styles.brand}>{product.brand}</span>
        <span className={styles.name}>{product.name}</span>

        <div className={styles.priceRow}>
          <span className={styles.price}>
            {range && <span className={styles.from}>from </span>}
            {formatINR(price)}
          </span>
        </div>

        <span className={styles.emi}>EMIs from {formatINR(lowestEmi)}/mo</span>

        {product.noCostUpto > 0 && (
          <span className={styles.chip}>
            No-cost upto {product.noCostUpto} mo
          </span>
        )}
      </div>
    </button>
  );
}

/** Loading placeholder that mirrors the card layout. */
export function ProductCardSkeleton() {
  return (
    <div className={styles.card} aria-hidden>
      <Skeleton height={0} style={{ aspectRatio: "1 / 1", width: "100%" }} radius={14} />
      <div className={styles.body}>
        <Skeleton width="45%" height={11} />
        <Skeleton width="85%" height={15} style={{ marginTop: 6 }} />
        <Skeleton width="55%" height={16} style={{ marginTop: 10 }} />
        <Skeleton width="70%" height={11} style={{ marginTop: 8 }} />
      </div>
    </div>
  );
}
