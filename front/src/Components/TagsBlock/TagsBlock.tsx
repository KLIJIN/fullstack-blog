import SideBlock from "@/Components/SideBlock";
import { FiHash } from "react-icons/fi";
import clsx from "clsx";

import styles from "./TagsBlock.module.scss";
import { TagsBlockProps } from "./types";

function TagsBlock({ items, isLoading = true }: TagsBlockProps) {
  return (
    <div className={styles.root}>
      <SideBlock title="Тэги">
        <ul className={styles.list}>
          {(isLoading ? [...Array(5)] : items).map((name, i) => (
            <a
              key={i}
              style={{ textDecoration: "none", color: "black" }}
              href={`/tags/${name}`}
            >
              <li key={i} className={clsx(styles.listItem)}>
                <div className={styles.itemButton}>
                  <FiHash className={styles.itemIcon} />
                  {isLoading ? (
                    <div />
                  ) : (
                    <span className={styles.itemText}>{name}</span>
                  )}
                </div>
              </li>
            </a>
          ))}
        </ul>
      </SideBlock>
    </div>
  );
}

export default TagsBlock;
