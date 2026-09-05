import type { EmiPlan, Product } from "../../types/marketplace";
import { formatINR } from "../../utils/format";
import { CheckCircle } from "../ui/Icons";
import styles from "./OrderConfirmSheet.module.css";

/**
 * Bottom-sheet summary shown after Continue. Stands in for the real
 * checkout — confirms the product, amount and the selected EMI plan.
 */
export default function OrderConfirmSheet({
  open,
  product,
  amount,
  variantLabel,
  plan,
  onClose,
}: {
  open: boolean;
  product: Product;
  amount: number;
  variantLabel?: string;
  plan: EmiPlan | null;
  onClose: () => void;
}) {
  if (!open || !plan) return null;

  const total = plan.monthly * plan.months;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.sheet}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Order summary"
      >
        <span className={styles.grabber} aria-hidden />
        <div className={styles.icon} aria-hidden>
          <CheckCircle size={40} />
        </div>
        <h2 className={styles.title}>Plan selected</h2>
        <p className={styles.subtitle}>
          Review your 1Fi EMI plan before you proceed.
        </p>

        <dl className={styles.rows}>
          <div className={styles.row}>
            <dt>Product</dt>
            <dd>{product.name}</dd>
          </div>
          {variantLabel && (
            <div className={styles.row}>
              <dt>Variant</dt>
              <dd>{variantLabel}</dd>
            </div>
          )}
          <div className={styles.row}>
            <dt>{product.isVoucher ? "Voucher amount" : "Amount"}</dt>
            <dd>{formatINR(amount)}</dd>
          </div>
          <div className={styles.row}>
            <dt>Tenure</dt>
            <dd>
              {plan.months} months · {plan.noCost ? "0%" : `${plan.annualRate}%`}{" "}
              p.a.
            </dd>
          </div>
          <div className={`${styles.row} ${styles.highlight}`}>
            <dt>Monthly EMI</dt>
            <dd>{formatINR(plan.monthly)}/mo</dd>
          </div>
          <div className={styles.row}>
            <dt>Total payable</dt>
            <dd>{formatINR(total)}</dd>
          </div>
        </dl>

        <button className={styles.done} onClick={onClose} type="button">
          Done
        </button>
      </div>
    </div>
  );
}
