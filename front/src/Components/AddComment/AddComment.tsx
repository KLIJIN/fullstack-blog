import React from "react";
import Button from "@/Components/Button";

import styles from "./AddComment.module.scss";

const AddComment: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.avatarContainer}>
        <img
          src="https://mui.com/static/images/avatar/5.jpg"
          alt=""
          className={styles.avatar}
        />
      </div>
      <div className={styles.form}>
        <input
          type="text"
          className={styles.text}
          placeholder="Написать кмментарий"
        />
        <Button variant="contained" className={styles.button}>
          Отправить
        </Button>
      </div>
    </div>
  );
};

export default AddComment;
