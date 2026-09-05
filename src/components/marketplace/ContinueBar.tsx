import { ArrowRight, ShareIcon } from "../ui/Icons";
import styles from "./ContinueBar.module.css";

/**
 * Sticky footer with an optional validation message, a share button and the
 * primary Continue CTA. Continue is disabled until the selection is valid.
 */
export default function ContinueBar({
  onContinue,
  onShare,
  disabled = false,
  error,
}: {
  onContinue: () => void;
  onShare?: () => void;
  disabled?: boolean;
  error?: string | null;
}) {
  return (
    <div className={styles.bar}>
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.row}>
        <button
          className={styles.share}
          onClick={onShare}
          aria-label="Share"
          type="button"
        >
          <ShareIcon size={20} />
        </button>
        <button
          className={styles.continue}
          onClick={onContinue}
          disabled={disabled}
          type="button"
        >
          Continue <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
