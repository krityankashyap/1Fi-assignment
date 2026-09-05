import { fetchProductById, fetchProducts } from "../services/api";
import { useAsync } from "./useAsync";

/** Loads the full Marketplace product listing. */
export function useProducts() {
  return useAsync(() => fetchProducts(), []);
}

/** Loads a single product by id. */
export function useProduct(id: string) {
  return useAsync(() => fetchProductById(id), [id]);
}
