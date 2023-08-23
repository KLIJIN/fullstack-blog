import React from 'react';
import clsx from 'clsx';

import styles from "./Post.module.scss";
import { PostProps } from "./types";


// const url = 'https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png';
// const urlAvatar = 'https://res.cloudinary.com/practicaldev/image/fetch/s--uigxYVRB--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/187971/a5359a24-b652-46be-8898-2c5df32aa6e0.png'

function Post({
  id: _id,
  title,
  imageUrl,
  user,
  createdAt,
  viewsCount,
  commentsCount,
  tags,
  isEditable,
  isFullPost,
  children,
}: PostProps) {

  const onClickRemove = () => { };
  return (
    <div className={clsx(styles.root, { [styles.rootFull]: isFullPost })}>

      {isEditable && (
        <div className={styles.buttonsPanel}>
          <a href={`/posts/${_id}/edit`}>
            <button>ont</button>
          </a>
          <button onClick={onClickRemove}>two</button>
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
          <img className={styles.userAvatar}
            src={user.avatarUrl || '/noavatar.png'} alt={user.fullName} />
          <div className={styles.userDetails}>
            <span className={styles.userName}>{user.fullName}</span>
            <span className={styles.userAdditional}>{createdAt}</span>
          </div>
        </div>

        <div className={styles.indention}>
          <h2 className={clsx(styles.title, { [styles.titleFull]: isFullPost })}>
            {isFullPost ? title : <a href={`/posts/${_id}`}>{title}</a>}
          </h2>

          <ul className={styles.tags} >
            {tags.map((name) => (
              <li key={name} className={styles.tag} >
                <a href={`/tag/${name}`}>#{name}</a>
              </li>
            ))}
          </ul>

          {children && <div className={styles.content}>{children}</div>}

          <ul className={styles.details} >
            <li className={styles.tag} >
              <span>{viewsCount}</span>
            </li>
            <li className={styles.tag} >
              <span>{commentsCount}</span>
            </li>
          </ul>
        </div>
      </div>


    </div>
  );
}



export default Post;