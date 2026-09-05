import { PRODUCTS } from "../data/products";
import type { Product } from "../types/marketplace";

/**
 * Mock API layer for the Marketplace.
 *
 * Components and hooks talk to these async functions instead of importing
 * mock data directly, so swapping in a real HTTP backend later means
 * changing only this file. Each call simulates network latency and can be
 * made to fail so loading/error states are exercised realistically.
 */

const LATENCY_MS = 650;

function delay<T>(value: T, ms: number): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

export class ApiError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ApiError";
  }
}

type FetchOptions = {
  /** Force a failure to exercise error states (defaults to false). */
  simulateError?: boolean;
  /** Override latency (ms). */
  latency?: number;
};

/** Returns the full product listing. */
export async function fetchProducts(
  opts: FetchOptions = {}
): Promise<Product[]> {
  const ms = opts.latency ?? LATENCY_MS;
  if (opts.simulateError) {
    await delay(null, ms);
    throw new ApiError("Failed to load products. Please try again.");
  }
  // Return copies so callers can't mutate the mock store.
  return delay(
    PRODUCTS.map((p) => ({ ...p })),
    ms
  );
}

/** Returns a single product by id, or throws if it doesn't exist. */
export async function fetchProductById(
  id: string,
  opts: FetchOptions = {}
): Promise<Product> {
  const ms = opts.latency ?? LATENCY_MS;
  if (opts.simulateError) {
    await delay(null, ms);
    throw new ApiError("Failed to load this product. Please try again.");
  }
  const product = PRODUCTS.find((p) => p.id === id);
  await delay(null, ms);
  if (!product) {
    throw new ApiError("Product not found.");
  }
  return { ...product };
}
