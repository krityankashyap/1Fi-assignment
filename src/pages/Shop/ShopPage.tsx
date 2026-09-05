import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ShopHero from "../../components/shop/ShopHero";
import ShopTabs, { type ShopTabId } from "../../components/shop/ShopTabs";
import SearchBar from "../../components/shop/SearchBar";
import TopBrands from "./tabs/TopBrands";
import NearbyStores from "./tabs/NearbyStores";
import MarketplaceTab from "./tabs/MarketplaceTab";
import styles from "./ShopPage.module.css";

const VALID_TABS: ShopTabId[] = ["top-brands", "nearby-stores", "marketplace"];

function parseTab(value: string | null): ShopTabId {
  return VALID_TABS.includes(value as ShopTabId)
    ? (value as ShopTabId)
    : "top-brands";
}

/**
 * The Shop page: purple hero, three-section tab control, shared search,
 * and the active section's content. Active tab lives in the URL (?tab=)
 * so sections are deep-linkable and survive refresh.
 */
export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const active = parseTab(searchParams.get("tab"));
  const [query, setQuery] = useState("");

  const setActive = (id: ShopTabId) => {
    setSearchParams(id === "top-brands" ? {} : { tab: id }, { replace: true });
  };

  return (
    <div>
      <ShopHero />

      <div className={styles.body}>
        <div className={styles.tabsWrap}>
          <ShopTabs active={active} onChange={setActive} />
        </div>

        <div className={styles.search}>
          <SearchBar value={query} onChange={setQuery} />
        </div>

        <div className={styles.content}>
          {active === "top-brands" && <TopBrands query={query} />}
          {active === "nearby-stores" && <NearbyStores />}
          {active === "marketplace" && <MarketplaceTab query={query} />}
        </div>
      </div>
    </div>
  );
}
