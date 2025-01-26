import Nav from "../../ui/Nav/Nav";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <Nav />
    </div>
  );
}
