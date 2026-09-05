import type { Product } from "../types/marketplace";

/**
 * Mock Marketplace catalogue. In a real app this would come from a backend;
 * here it is served through the mock API in `services/api.ts` so components
 * never import this file directly.
 */
export const PRODUCTS: Product[] = [
  {
    id: "air-india-gift-voucher",
    name: "Air India Gift Voucher",
    brand: "Air India",
    category: "Travel",
    tagline: "Gift voucher",
    description:
      "Book flights on Air India using a gift voucher and split the cost into easy EMIs — up to 60 months.",
    emoji: "✈️",
    color: "#C1121F",
    variants: [],
    amountRange: { min: 2000, max: 200000, default: 500 },
    noCostUpto: 18,
    channel: "Online",
    isVoucher: true,
    howToUse: [
      "Select the flights you are interested in on the Air India website or Air India mobile app.",
      "Enter the Gift Card number and pin that you have received.",
      "If the booking amount equals or exceeds the available credit on the Gift Card, the Gift Card will be fully used until it has no remaining value.",
    ],
    terms: [
      "Comes with 1-year validity and is valid only on the Air India website or Air India mobile app.",
      "Multiple Gift Cards (up to a maximum of three) can be combined and used in a single transaction.",
      "A Gift Card can be combined with any offer, such as a discount, cash back, or promotion, offered on Air India's website, www.airindia.com.",
    ],
  },
  {
    id: "iphone-15",
    name: "Apple iPhone 15",
    brand: "Apple Premium Reseller",
    category: "Electronics",
    tagline: "6.1\" · A16 Bionic",
    description:
      "iPhone 15 with the Dynamic Island, a 48MP main camera and USB-C. Pay over time with no-cost EMIs.",
    emoji: "📱",
    color: "#1f2937",
    variants: [
      { id: "128-black", label: "128GB · Black", price: 79900, attributes: { Storage: "128GB", Colour: "Black" } },
      { id: "256-black", label: "256GB · Black", price: 89900, attributes: { Storage: "256GB", Colour: "Black" } },
      { id: "256-blue", label: "256GB · Blue", price: 89900, attributes: { Storage: "256GB", Colour: "Blue" } },
      { id: "512-blue", label: "512GB · Blue", price: 109900, attributes: { Storage: "512GB", Colour: "Blue" } },
    ],
    noCostUpto: 24,
    channel: "Online",
    isVoucher: false,
  },
  {
    id: "macbook-air-m3",
    name: "MacBook Air M3",
    brand: "Apple Premium Reseller",
    category: "Electronics",
    tagline: "13.6\" · M3 chip",
    description:
      "The strikingly thin MacBook Air with the M3 chip and up to 18 hours of battery life.",
    emoji: "💻",
    color: "#334155",
    variants: [
      { id: "8-256", label: "8GB · 256GB", price: 114900, attributes: { RAM: "8GB", Storage: "256GB" } },
      { id: "8-512", label: "8GB · 512GB", price: 134900, attributes: { RAM: "8GB", Storage: "512GB" } },
      { id: "16-512", label: "16GB · 512GB", price: 154900, attributes: { RAM: "16GB", Storage: "512GB" } },
    ],
    noCostUpto: 24,
    channel: "Online",
    isVoucher: false,
  },
  {
    id: "croma-4k-tv",
    name: "Croma 55\" 4K QLED TV",
    brand: "Croma",
    category: "Electronics",
    tagline: "55\" · 4K QLED",
    description:
      "Croma 139cm 4K QLED smart TV with Dolby Vision and built-in voice assistants.",
    emoji: "📺",
    color: "#12A19A",
    variants: [
      { id: "50", label: "50 inch", price: 39999, attributes: { Size: "50\"" } },
      { id: "55", label: "55 inch", price: 45999, attributes: { Size: "55\"" } },
      { id: "65", label: "65 inch", price: 64999, attributes: { Size: "65\"" } },
    ],
    noCostUpto: 6,
    channel: "In-store",
    isVoucher: false,
  },
  {
    id: "sony-wh1000xm5",
    name: "Sony WH-1000XM5",
    brand: "Croma",
    category: "Electronics",
    tagline: "Wireless · Noise cancelling",
    description:
      "Industry-leading noise cancellation with up to 30 hours of battery and crystal-clear calls.",
    emoji: "🎧",
    color: "#0f172a",
    variants: [
      { id: "black", label: "Black", price: 29990, attributes: { Colour: "Black" } },
      { id: "silver", label: "Silver", price: 29990, attributes: { Colour: "Silver" } },
    ],
    noCostUpto: 9,
    channel: "Online",
    isVoucher: false,
  },
  {
    id: "caratlane-ring",
    name: "CaratLane Solitaire Ring",
    brand: "CaratLane",
    category: "Jewellery",
    tagline: "18KT · Diamond",
    description:
      "A timeless 18KT gold solitaire ring, certified and hallmarked. Spread the cost over easy EMIs.",
    emoji: "💍",
    color: "#A50968",
    variants: [
      { id: "yellow", label: "Yellow Gold", price: 28500, attributes: { Metal: "Yellow Gold" } },
      { id: "white", label: "White Gold", price: 30500, attributes: { Metal: "White Gold" } },
      { id: "rose", label: "Rose Gold", price: 30500, attributes: { Metal: "Rose Gold" } },
    ],
    noCostUpto: 6,
    channel: "Online",
    isVoucher: false,
  },
  {
    id: "giva-necklace",
    name: "Giva Sterling Silver Necklace",
    brand: "Giva",
    category: "Jewellery",
    tagline: "925 Silver · Rhodium",
    description:
      "Anti-tarnish 925 sterling silver necklace with a rhodium finish. No-cost EMIs up to 36 months.",
    emoji: "📿",
    color: "#E7A5B4",
    variants: [
      { id: "silver", label: "Silver", price: 3499, attributes: { Finish: "Silver" } },
      { id: "gold", label: "Gold Plated", price: 3999, attributes: { Finish: "Gold Plated" } },
    ],
    noCostUpto: 36,
    channel: "Online",
    isVoucher: false,
  },
  {
    id: "easemytrip-holiday-voucher",
    name: "EaseMyTrip Holiday Voucher",
    brand: "EaseMyTrip Holiday",
    category: "Travel",
    tagline: "Holiday package voucher",
    description:
      "Book curated holiday packages on EaseMyTrip and pay over up to 60 months with 1Fi.",
    emoji: "🏝️",
    color: "#0A5AA5",
    variants: [],
    amountRange: { min: 5000, max: 300000, default: 25000 },
    noCostUpto: 24,
    channel: "Online",
    isVoucher: true,
    howToUse: [
      "Choose your holiday package on the EaseMyTrip website or app.",
      "Apply the voucher code received after purchase at checkout.",
      "Any remaining voucher balance stays available for your next booking.",
    ],
    terms: [
      "Valid for 12 months from the date of issue.",
      "Applicable only on EaseMyTrip holiday packages.",
      "Cannot be exchanged for cash.",
    ],
  },
];
