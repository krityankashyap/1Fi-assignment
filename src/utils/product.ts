import type { Product } from "../types/marketplace";

/**
 * The "from" price used on listing cards and as the starting amount for EMI
 * previews: the cheapest variant, or a voucher's default amount.
 */
export function startingPrice(product: Product): number {
  if (product.isVoucher && product.amountRange) {
    return product.amountRange.default;
  }
  if (product.variants.length === 0) return 0;
  return Math.min(...product.variants.map((v) => v.price));
}

/** Whether a product's price varies (multiple variants or a voucher range). */
export function hasPriceRange(product: Product): boolean {
  if (product.isVoucher) return true;
  const prices = new Set(product.variants.map((v) => v.price));
  return prices.size > 1;
}
