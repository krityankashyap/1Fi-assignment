import { SearchIcon } from "../ui/Icons";
import styles from "./SearchBar.module.css";

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search online stores...",
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div className={styles.wrap}>
      <SearchIcon className={styles.icon} />
      <input
        className={styles.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Search stores"
      />
    </div>
  );
}
