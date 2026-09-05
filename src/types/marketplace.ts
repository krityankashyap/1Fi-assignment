/** Domain models for the 1Fi Marketplace. */

export type ProductCategory =
  | "Electronics"
  | "Travel"
  | "Jewellery"
  | "Fashion";

/** A single purchasable variant of a product (e.g. "256GB · Black"). */
export type ProductVariant = {
  id: string;
  label: string;
  /** Price in whole rupees. */
  price: number;
  /** Optional structured attributes for richer variant pickers. */
  attributes?: Record<string, string>;
};

/**
 * Gift-voucher style products don't have a fixed price — the user enters an
 * amount within a range (see the Air India reference screens).
 */
export type AmountRange = {
  min: number;
  max: number;
  /** Suggested default amount to prefill. */
  default: number;
};

export type Product = {
  id: string;
  name: string;
  brand: string;
  category: ProductCategory;
  /** Short tagline shown on the card / detail header. */
  tagline: string;
  /** Longer description for the detail page. */
  description: string;
  /** Emoji used by <ProductImage> as an asset stand-in. */
  emoji: string;
  /** Accent colour for the image backdrop + variant selection. */
  color: string;
  /** Fixed-price products list one or more variants. */
  variants: ProductVariant[];
  /** Voucher-style products use an amount range instead of variants. */
  amountRange?: AmountRange;
  /** Max tenure (months) offered at 0% ("no-cost") for this product. */
  noCostUpto: number;
  /** Whether the product is redeemed online / in-store. */
  channel: "Online" | "In-store";
  /** Marks voucher products (drives the amount-input UI). */
  isVoucher: boolean;
  /** Optional how-to-use + terms shown on the detail page. */
  howToUse?: string[];
  terms?: string[];
};

/** A computed EMI option for a given amount. */
export type EmiPlan = {
  months: number;
  /** Annual interest rate (percent). 0 = no-cost EMI. */
  annualRate: number;
  /** Rounded monthly instalment in rupees. */
  monthly: number;
  /** True when annualRate === 0. */
  noCost: boolean;
};
