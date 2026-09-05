import styles from "./Skeleton.module.css";

/** A single shimmering placeholder block. */
export function Skeleton({
  width,
  height,
  radius = 8,
  style,
}: {
  width?: number | string;
  height?: number | string;
  radius?: number;
  style?: React.CSSProperties;
}) {
  return (
    <span
      className={styles.block}
      style={{ width, height, borderRadius: radius, ...style }}
    />
  );
}
