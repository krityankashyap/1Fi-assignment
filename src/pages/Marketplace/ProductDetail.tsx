import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Product } from "../../types/marketplace";
import { useProduct } from "../../hooks/useProducts";
import { buildEmiPlans } from "../../utils/emi";
import { formatINR } from "../../utils/format";
import AppHeader from "../../components/layout/AppHeader";
import BrandHeader from "../../components/marketplace/BrandHeader";
import ProductImage from "../../components/marketplace/ProductImage";
import AmountInput from "../../components/marketplace/AmountInput";
import VariantSelector from "../../components/marketplace/VariantSelector";
import EmiPlans from "../../components/marketplace/EmiPlans";
import ContinueBar from "../../components/marketplace/ContinueBar";
import InfoSection from "../../components/marketplace/InfoSection";
import OrderConfirmSheet from "../../components/marketplace/OrderConfirmSheet";
import StateView from "../../components/ui/StateView";
import { Skeleton } from "../../components/ui/Skeleton";
import styles from "./ProductDetail.module.css";

export default function ProductDetail() {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const { data: product, loading, error, reload } = useProduct(id);

  const goBack = () => navigate("/shop?tab=marketplace");

  if (loading) return <DetailSkeleton onBack={goBack} />;

  if (error || !product) {
    return (
      <div>
        <AppHeader title="Pay using 1Fi" onBack={goBack} />
        <StateView
          emoji="⚠️"
          title="Couldn’t load this product"
          message={error ?? "Product not found."}
          actionLabel="Retry"
          onAction={reload}
        />
      </div>
    );
  }

  return <ProductDetailView product={product} onBack={goBack} />;
}

/** The interactive detail view — separated so hooks run only with data present. */
function ProductDetailView({
  product,
  onBack,
}: {
  product: Product;
  onBack: () => void;
}) {
  const isVoucher = product.isVoucher && !!product.amountRange;

  const [amount, setAmount] = useState(
    isVoucher ? product.amountRange!.default : product.variants[0].price
  );
  const [variantId, setVariantId] = useState(
    isVoucher ? "" : product.variants[0].id
  );
  const [selectedMonths, setSelectedMonths] = useState<number>(
    product.noCostUpto
  );
  const [sheetOpen, setSheetOpen] = useState(false);

  const selectedVariant = product.variants.find((v) => v.id === variantId);
  const effectiveAmount = isVoucher ? amount : selectedVariant?.price ?? 0;

  const plans = useMemo(
    () => buildEmiPlans(effectiveAmount, product.noCostUpto),
    [effectiveAmount, product.noCostUpto]
  );
  const maxTenure = plans[plans.length - 1].months;
  const selectedPlan = plans.find((p) => p.months === selectedMonths) ?? null;

  // Validation (voucher amount range).
  const range = product.amountRange;
  const belowMin = isVoucher && range ? effectiveAmount < range.min : false;
  const validationError = belowMin
    ? `Amount must be at least ${formatINR(range!.min)}`
    : null;
  const canContinue = !validationError && effectiveAmount > 0 && !!selectedPlan;

  const onVariantSelect = (vid: string) => setVariantId(vid);

  const onShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: product.name, url: window.location.href });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
      }
    } catch {
      /* user dismissed the share sheet — no-op */
    }
  };

  return (
    <div>
      <AppHeader title="Pay using 1Fi" onBack={onBack} />

      <div className={styles.body}>
        <BrandHeader product={product} onShare={onShare} />

        {!isVoucher && (
          <div className={styles.imageWrap}>
            <ProductImage emoji={product.emoji} color={product.color} size="lg" />
          </div>
        )}

        <div className={styles.titleBlock}>
          <h2 className={styles.title}>
            {isVoucher ? product.tagline : product.name}
          </h2>
          <p className={styles.subtitle}>Up to {maxTenure} months EMIs</p>
        </div>

        {isVoucher && range ? (
          <AmountInput
            value={amount}
            onChange={setAmount}
            min={range.min}
            max={range.max}
          />
        ) : (
          <>
            <div className={styles.priceBlock}>
              <span className={styles.price}>{formatINR(effectiveAmount)}</span>
            </div>
            <VariantSelector
              variants={product.variants}
              selectedId={variantId}
              onSelect={onVariantSelect}
            />
          </>
        )}

        <div className={styles.plans}>
          <EmiPlans
            plans={plans}
            selectedMonths={selectedMonths}
            onSelect={setSelectedMonths}
            disabled={effectiveAmount <= 0}
          />
        </div>

        <ContinueBar
          onContinue={() => setSheetOpen(true)}
          onShare={onShare}
          disabled={!canContinue}
          error={validationError}
        />

        {product.description && (
          <p className={styles.description}>{product.description}</p>
        )}

        {product.howToUse && product.howToUse.length > 0 && (
          <div className={styles.section}>
            <InfoSection title="How to use" items={product.howToUse} variant="steps" />
          </div>
        )}

        {product.terms && product.terms.length > 0 && (
          <div className={styles.section}>
            <InfoSection
              title="Terms and Conditions"
              items={product.terms}
              variant="checks"
            />
          </div>
        )}

        <div className={styles.bottomSpace} />
      </div>

      <OrderConfirmSheet
        open={sheetOpen}
        product={product}
        amount={effectiveAmount}
        variantLabel={selectedVariant?.label}
        plan={selectedPlan}
        onClose={() => setSheetOpen(false)}
      />
    </div>
  );
}

/** Skeleton that mirrors the detail layout while the product loads. */
function DetailSkeleton({ onBack }: { onBack: () => void }) {
  return (
    <div>
      <AppHeader title="Pay using 1Fi" onBack={onBack} />
      <div className={styles.body}>
        <div className={styles.skHeader}>
          <Skeleton width={56} height={56} radius={14} />
          <div style={{ flex: 1 }}>
            <Skeleton width="55%" height={18} />
            <Skeleton width="40%" height={12} style={{ marginTop: 8 }} />
          </div>
        </div>
        <Skeleton width="60%" height={26} radius={8} style={{ margin: "26px auto 10px" }} />
        <Skeleton width="45%" height={14} radius={8} style={{ margin: "0 auto 28px" }} />
        <Skeleton width="100%" height={220} radius={18} />
      </div>
    </div>
  );
}
