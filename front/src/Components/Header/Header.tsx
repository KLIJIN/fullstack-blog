import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/Components/Button';

import styles from './Header.module.scss';

function Header() {
  const isAuth = true;
  const onClickLogout = () => { };


  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <Link to="/" className={styles.logo}>
            <div>My React BLOG</div>
          </Link>
          <div className={styles.buttons}>
            {isAuth ? (
              <div className={styles.buttonPanel}>
                <Link to="/posts/create">
                  <Button variant="contained">Написать статью</Button>
                </Link>
                <Button onClick={onClickLogout} variant="contained" color="error">
                  Выйти
                </Button>
              </div>
            ) : (
              <div className={styles.buttonPanel}>
                <Link to="/login">
                  <Button variant="outlined">Войти</Button>
                </Link>
                  <Link to="/register">
                  <Button variant="contained">Создать аккаунт</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}


export default Header;