import { ChevronLeft } from "../ui/Icons";
import StatusBar from "./StatusBar";
import styles from "./AppHeader.module.css";

/** Sticky top bar with a status bar, back button and page title. */
export default function AppHeader({
  title,
  onBack,
}: {
  title: string;
  onBack: () => void;
}) {
  return (
    <div className={styles.wrap}>
      <StatusBar tone="dark" />
      <div className={styles.row}>
        <button className={styles.back} onClick={onBack} aria-label="Go back" type="button">
          <ChevronLeft size={26} />
        </button>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </div>
  );
}
