import styles from "./ProductImage.module.css";

/**
 * Product image stand-in: a soft tint derived from the product's accent
 * colour with the category emoji centred. Swappable for real <img> assets
 * without touching callers.
 */
export default function ProductImage({
  emoji,
  color,
  size = "md",
}: {
  emoji: string;
  color: string;
  size?: "md" | "lg";
}) {
  return (
    <div
      className={`${styles.wrap} ${size === "lg" ? styles.lg : styles.md}`}
      style={{
        background: `linear-gradient(160deg, ${color}1f, ${color}0d)`,
      }}
      aria-hidden
    >
      <span className={styles.emoji}>{emoji}</span>
    </div>
  );
}
