import { useState } from "react";
import type { EmiPlan } from "../../types/marketplace";
import { startsAt } from "../../utils/emi";
import { formatINR } from "../../utils/format";
import { ChevronDown, ChevronUp } from "../ui/Icons";
import styles from "./EmiPlans.module.css";

/**
 * The EMI plans card: a "Starts at ₹X/mo" header with a show/hide toggle,
 * and a list of selectable tenure rows (tenure · p.a. rate → monthly).
 * Selecting a row drives the Continue CTA.
 */
export default function EmiPlans({
  plans,
  selectedMonths,
  onSelect,
  disabled = false,
}: {
  plans: EmiPlan[];
  selectedMonths: number | null;
  onSelect: (months: number) => void;
  disabled?: boolean;
}) {
  const [open, setOpen] = useState(true);
  const lowest = startsAt(plans);

  return (
    <div className={`${styles.card} ${disabled ? styles.disabled : ""}`}>
      <button
        className={styles.header}
        onClick={() => setOpen((o) => !o)}
        type="button"
        aria-expanded={open}
      >
        <span className={styles.startsAt}>
          Starts at <strong>{formatINR(lowest)}/mo</strong>
        </span>
        <span className={styles.toggle}>
          {open ? "Hide plans" : "View plans"}
          {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </span>
      </button>

      {open && (
        <ul className={styles.list} role="radiogroup" aria-label="EMI plans">
          {plans.map((p) => {
            const active = p.months === selectedMonths;
            return (
              <li key={p.months}>
                <button
                  className={`${styles.row} ${active ? styles.active : ""}`}
                  onClick={() => onSelect(p.months)}
                  type="button"
                  role="radio"
                  aria-checked={active}
                >
                  <span className={styles.radio} data-on={active} />
                  <span className={styles.tenure}>
                    {p.months} months ·{" "}
                    <span className={styles.rate}>
                      {p.noCost ? "0% p.a." : `${p.annualRate}% p.a.`}
                    </span>
                  </span>
                  <span className={styles.monthly}>
                    {formatINR(p.monthly)} <span className={styles.per}>/mo</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
