import type { EmiPlan } from "../types/marketplace";

/**
 * Standard tenure + interest-rate card used across the Marketplace.
 * Rates mirror the 1Fi "Pay using 1Fi" reference screens: 0% up to 18
 * months, then increasing p.a. rates for longer tenures.
 */
export const RATE_CARD: { months: number; annualRate: number }[] = [
  { months: 3, annualRate: 0 },
  { months: 6, annualRate: 0 },
  { months: 9, annualRate: 0 },
  { months: 12, annualRate: 0 },
  { months: 18, annualRate: 0 },
  { months: 24, annualRate: 4.49 },
  { months: 36, annualRate: 6.49 },
  { months: 48, annualRate: 7.49 },
  { months: 60, annualRate: 7.99 },
];

/**
 * Monthly instalment for a reducing-balance EMI.
 * For a 0% rate this is simply principal / months. Rounded up to the rupee,
 * matching the reference screens (₹500 over 3 months → ₹167).
 */
export function monthlyInstalment(
  principal: number,
  months: number,
  annualRate: number
): number {
  if (principal <= 0 || months <= 0) return 0;
  if (annualRate === 0) return Math.ceil(principal / months);
  const i = annualRate / 12 / 100;
  const pow = Math.pow(1 + i, months);
  const emi = (principal * i * pow) / (pow - 1);
  return Math.ceil(emi);
}

/**
 * Build the full list of EMI plans for a given amount, applying the
 * product's no-cost window (tenures ≤ noCostUpto are forced to 0%).
 */
export function buildEmiPlans(amount: number, noCostUpto: number): EmiPlan[] {
  return RATE_CARD.map(({ months, annualRate }) => {
    const rate = months <= noCostUpto ? 0 : annualRate;
    return {
      months,
      annualRate: rate,
      monthly: monthlyInstalment(amount, months, rate),
      noCost: rate === 0,
    };
  });
}

/** The lowest monthly instalment across all tenures (the "Starts at" value). */
export function startsAt(plans: EmiPlan[]): number {
  return plans.reduce(
    (min, p) => (p.monthly > 0 ? Math.min(min, p.monthly) : min),
    Infinity
  );
}
