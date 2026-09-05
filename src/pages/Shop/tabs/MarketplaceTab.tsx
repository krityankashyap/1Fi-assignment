import styles from "./EmptyTab.module.css";

/**
 * Placeholder for Chunk 2 only. The real 1Fi Marketplace product listing
 * (mock API + product cards) is built in Chunk 3.
 */
export default function MarketplaceTab({ query: _query }: { query: string }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.pin} aria-hidden>
        🛒
      </div>
      <h3 className={styles.title}>1Fi Marketplace</h3>
      <p className={styles.sub}>Product listing coming next (Chunk 3).</p>
    </div>
  );
}
