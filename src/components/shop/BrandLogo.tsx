import styles from "./BrandLogo.module.css";

function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

/** Renders a brand's logo tile from a colour + monogram (no image assets). */
export default function BrandLogo({
  name,
  color,
  monogram,
  size = 60,
}: {
  name: string;
  color: string;
  monogram?: string;
  size?: number;
}) {
  const label = monogram || initials(name);
  // Scale the text down as the label gets longer so it always fits.
  const fontSize = Math.max(12, Math.round((size / label.length) * 0.9));
  return (
    <div
      className={styles.tile}
      style={{ width: size, height: size, background: color }}
      aria-hidden
    >
      <span className={styles.text} style={{ fontSize }}>
        {label}
      </span>
    </div>
  );
}
