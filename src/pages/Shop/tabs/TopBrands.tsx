import { BRANDS } from "../../../data/brands";
import BrandCard from "../../../components/shop/BrandCard";
import styles from "./TopBrands.module.css";

/** Top Brands list. Filters by the shared Shop search query. */
export default function TopBrands({ query }: { query: string }) {
  const q = query.trim().toLowerCase();
  const brands = q
    ? BRANDS.filter((b) => b.name.toLowerCase().includes(q))
    : BRANDS;

  return (
    <section>
      <h2 className={styles.heading}>Top Brands</h2>
      {brands.length === 0 ? (
        <p className={styles.empty}>No brands match “{query}”.</p>
      ) : (
        <ul className={styles.list}>
          {brands.map((b) => (
            <li key={b.id}>
              <BrandCard brand={b} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
