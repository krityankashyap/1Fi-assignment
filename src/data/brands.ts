/**
 * Mock "Top Brands" catalogue.
 * Mirrors the brands shown in the 1Fi Shop screenshots. Real brand logo
 * assets aren't bundled (licensing), so each brand carries a colour +
 * monogram that <BrandLogo> renders into a branded tile.
 */
export type Brand = {
  id: string;
  name: string;
  /** Max no-cost EMI tenure advertised on the card. */
  maxNoCostMonths: number;
  /** Background colour for the logo tile. */
  color: string;
  /** Optional short monogram; falls back to initials from the name. */
  monogram?: string;
  category: "Travel" | "Electronics" | "Jewellery" | "Hospitality";
};

export const BRANDS: Brand[] = [
  { id: "air-india", name: "Air India", maxNoCostMonths: 18, color: "#C1121F", monogram: "AI", category: "Travel" },
  { id: "apple-premium", name: "Apple Premium Reseller", maxNoCostMonths: 24, color: "#1a1a1a", monogram: "", category: "Electronics" },
  { id: "caratlane", name: "CaratLane", maxNoCostMonths: 6, color: "#A50968", monogram: "C", category: "Jewellery" },
  { id: "cgh-earth", name: "CGH Earth", maxNoCostMonths: 24, color: "#5B8C3E", monogram: "cgh", category: "Hospitality" },
  { id: "croma", name: "Croma", maxNoCostMonths: 6, color: "#12A19A", monogram: "cr", category: "Electronics" },
  { id: "easemytrip-holiday", name: "EaseMyTrip Holiday", maxNoCostMonths: 24, color: "#0A5AA5", monogram: "EMT", category: "Travel" },
  { id: "easemytrip-hotel", name: "EaseMyTrip Hotel", maxNoCostMonths: 24, color: "#0A5AA5", monogram: "EMT", category: "Travel" },
  { id: "giva", name: "Giva", maxNoCostMonths: 36, color: "#E7A5B4", monogram: "GIVA", category: "Jewellery" },
  { id: "reliance-digital", name: "Reliance Digital", maxNoCostMonths: 12, color: "#E4181C", monogram: "RD", category: "Electronics" },
  { id: "tanishq", name: "Tanishq", maxNoCostMonths: 12, color: "#8A1A3B", monogram: "T", category: "Jewellery" },
];
