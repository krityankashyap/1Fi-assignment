import { formatIndianNumber } from "../../utils/format";
import styles from "./AmountInput.module.css";

/**
 * Large centered amount entry for voucher products, with the allowed range
 * shown above. Emits a plain integer amount (0 when empty).
 */
export default function AmountInput({
  value,
  onChange,
  min,
  max,
}: {
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
}) {
  const handle = (raw: string) => {
    const digits = raw.replace(/[^\d]/g, "");
    const next = digits === "" ? 0 : parseInt(digits, 10);
    // Cap at max so users can't exceed the allowed range.
    onChange(Math.min(next, max));
  };

  return (
    <div className={styles.wrap}>
      <p className={styles.label}>
        Enter the purchase amount · ₹{formatIndianNumber(min)} – ₹
        {formatIndianNumber(max)}
      </p>
      <div className={styles.field}>
        <span className={styles.rupee}>₹</span>
        <input
          className={styles.input}
          inputMode="numeric"
          value={value === 0 ? "" : formatIndianNumber(value)}
          onChange={(e) => handle(e.target.value)}
          placeholder="0"
          aria-label="Purchase amount"
          autoComplete="off"
        />
      </div>
    </div>
  );
}
