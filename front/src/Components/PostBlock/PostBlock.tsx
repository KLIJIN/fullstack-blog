import { PostBlockProps } from "./types";

function PostBlock({ children, className }: PostBlockProps) {
  return <div className={className}>{children}</div>;
}

export default PostBlock;
