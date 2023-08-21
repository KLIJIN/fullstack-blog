import React from 'react';

// import styles from "./PostBlock.module.scss";
import { PostBlockProps } from "./types";

function PostBlock({ children, className }: PostBlockProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}



export default PostBlock;