import { useNavigate } from "react-router-dom";
import { useProducts } from "../../../hooks/useProducts";
import ProductCard, {
  ProductCardSkeleton,
} from "../../../components/marketplace/ProductCard";
import StateView from "../../../components/ui/StateView";
import styles from "./MarketplaceTab.module.css";

/** The 1Fi Marketplace product listing (mock API + loading/error states). */
export default function MarketplaceTab({ query }: { query: string }) {
  const navigate = useNavigate();
  const { data: products, loading, error, reload } = useProducts();

  const q = query.trim().toLowerCase();
  const filtered = (products ?? []).filter(
    (p) =>
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
  );

  return (
    <section>
      <div className={styles.headingRow}>
        <h2 className={styles.heading}>1Fi Marketplace</h2>
        {!loading && !error && products && (
          <span className={styles.count}>{filtered.length} products</span>
        )}
      </div>

      {loading && (
        <div className={styles.grid} aria-busy="true">
          {Array.from({ length: 6 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      )}

      {!loading && error && (
        <StateView
          emoji="⚠️"
          title="Couldn’t load products"
          message={error}
          actionLabel="Retry"
          onAction={reload}
        />
      )}

      {!loading && !error && filtered.length === 0 && (
        <StateView
          emoji="🔍"
          title="No products found"
          message={
            q
              ? `Nothing matches “${query}”. Try a different search.`
              : "Check back soon for new products."
          }
        />
      )}

      {!loading && !error && filtered.length > 0 && (
        <ul className={styles.grid}>
          {filtered.map((p) => (
            <li key={p.id}>
              <ProductCard
                product={p}
                onClick={() => navigate(`/shop/marketplace/${p.id}`)}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
