import React from 'react';
import SideBlock from '@/Components/SideBlock';
import { CommentsBlockProps } from './types';

import styles from './CommentsBlock.module.scss';


function CommentsBlock({ items, children, isLoading = true }: CommentsBlockProps) {
  return (
    <SideBlock title="Комментарии">
      <ul className={styles.list}>
        {(isLoading ? [...Array(5)] : items).map((obj) => (
          <li className={styles.listItem} key={obj.text}>
            <div className={styles.listItemAvatar}>
              {isLoading ? (
                <div className={styles.skeleton} />
              ) : (
                <img alt={obj.user.fullName} src={obj.user.avatarUrl} />
              )}
            </div>
            {isLoading ? (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className={styles.skeleton} />
                <div className={styles.skeleton} />
              </div>
            ) : (
              <div className={styles.comment}>
                <div className={styles.name}>
                  {obj.user.fullName}
                </div>
                <div className={styles.text}>{obj.text}</div>
              </div>
            )}
          </li>
        ))}
      </ul>
      {children}
    </SideBlock>
  )
}


export default CommentsBlock;