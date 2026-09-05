/** Format a whole-rupee amount in the Indian numbering system, e.g. ₹1,14,900. */
export function formatINR(amount: number): string {
  return "₹" + Math.round(amount).toLocaleString("en-IN");
}

/** Format without the ₹ symbol (for cases where the symbol is rendered separately). */
export function formatIndianNumber(amount: number): string {
  return Math.round(amount).toLocaleString("en-IN");
}
