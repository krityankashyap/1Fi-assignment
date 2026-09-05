import type { Product } from "../../types/marketplace";
import BrandLogo from "../shop/BrandLogo";
import { ShareIcon, TicketIcon } from "../ui/Icons";
import styles from "./BrandHeader.module.css";

/** Product/brand header on the detail page (logo, name, tag + channel, share). */
export default function BrandHeader({
  product,
  onShare,
}: {
  product: Product;
  onShare?: () => void;
}) {
  return (
    <div className={styles.wrap}>
      <BrandLogo name={product.brand} color={product.color} size={56} />
      <div className={styles.info}>
        <span className={styles.name}>{product.brand}</span>
        <div className={styles.meta}>
          <span className={styles.tag}>
            <TicketIcon size={16} className={styles.tagIcon} />
            {product.tagline}
          </span>
          <span className={styles.channel}>{product.channel}</span>
        </div>
      </div>
      <button className={styles.share} onClick={onShare} aria-label="Share" type="button">
        <ShareIcon size={18} />
      </button>
    </div>
  );
}
