import { FaRegEdit } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { useAppDispatch } from "@/store";
import { deleteOnePost } from "@/store/slices/fullPost/requests";
import { getPosts } from "@/store/slices/posts/requests";
import { PostProps } from "./types";

import styles from "./Post.module.scss";

function Post({
  id,
  title,
  imageUrl,
  user,
  createdAt,
  viewsCount,
  commentsCount,
  tags,
  isEditable,
  isFullPost,
  children
}: PostProps) {
  const dispatch = useAppDispatch();

  const onClickRemove = async () => {
    await dispatch(deleteOnePost(id));
    dispatch(getPosts());
    
  };
  return (
    <div className={clsx(styles.root, { [styles.rootFull]: isFullPost })}>
      {isEditable && (
        <div className={styles.buttonsPanel}>
          <button className={clsx(styles.button)}>
            <Link to={`/posts/${id}/edit`}>
              <FaRegEdit />
            </Link>
          </button>

          <button
            onClick={onClickRemove}
            className={clsx(styles.button, styles.delete)}
          >
            <ImCancelCircle className={styles.delete} />
          </button>
        </div>
      )}

      {imageUrl && (
        <img
          className={clsx(styles.image, { [styles.imageFull]: isFullPost })}
          src={imageUrl}
          alt={title}
        />
      )}

      <div className={styles.wrapper}>
        <div className={styles.user}>
          <img
            className={styles.userAvatar}
            src={user.avatarUrl || "/noavatar.png"}
            alt={user.fullName}
          />
          <div className={styles.userDetails}>
            <span className={styles.userName}>{user.fullName}</span>
            <span className={styles.userAdditional}>{createdAt}</span>
          </div>
        </div>

        <div className={styles.indention}>
          <h2
            className={clsx(styles.title, { [styles.titleFull]: isFullPost })}
          >
            {isFullPost ? title : <Link to={`/posts/${id}`}>{title}</Link>}
          </h2>

          <ul className={styles.tags}>
            {tags.map((name) => (
              <li key={name} className={styles.tag}>
                <Link to={`/tag/${name}`}>#{name}</Link>
              </li>
            ))}
          </ul>

          {children && <div className={styles.content}>{children}</div>}

          <ul className={styles.details}>
            <li className={styles.tag}>
              <span>{viewsCount}</span>
            </li>
            <li className={styles.tag}>
              <span>{commentsCount}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Post;
