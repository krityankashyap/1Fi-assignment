import styles from "./StateView.module.css";

/**
 * Generic centered state for error / empty screens, with an optional
 * retry action. Reused by the Marketplace listing and detail page.
 */
export default function StateView({
  emoji,
  title,
  message,
  actionLabel,
  onAction,
}: {
  emoji: string;
  title: string;
  message?: string;
  actionLabel?: string;
  onAction?: () => void;
}) {
  return (
    <div className={styles.wrap} role="status">
      <div className={styles.emoji} aria-hidden>
        {emoji}
      </div>
      <h3 className={styles.title}>{title}</h3>
      {message && <p className={styles.message}>{message}</p>}
      {actionLabel && onAction && (
        <button className={styles.action} onClick={onAction} type="button">
          {actionLabel}
        </button>
      )}
    </div>
  );
}
