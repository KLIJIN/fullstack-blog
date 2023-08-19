import styles from "./SideBlock.module.scss";
import { SideBlockProps } from "./types";

function SideBlock({ title, children }: SideBlockProps) {
  return (
    <div className={styles.paper}>
      <h6 className={styles.title}>{title}</h6>
      {children}
    </div>
  );
}



export default SideBlock