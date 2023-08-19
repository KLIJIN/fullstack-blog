import React from 'react';
import Button from '@/Components/Button';

import styles from './Header.module.scss';

function Header() {
  const isAuth = false;
  const onClickLogout = () => { };


  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <a className={styles.logo} href="/">
            <div>My React BLOG</div>
          </a>
          <div className={styles.buttons}>
            {isAuth ? (
              <>
                <a href="/posts/create">
                  <Button variant="contained">Написать статью</Button>
                </a>
                <Button onClick={onClickLogout} variant="contained" color="error">
                  Выйти
                </Button>
              </>
            ) : (
              <div className={styles.buttonPanel}>
                <a href="/login">
                  <Button variant="outlined">Войти</Button>
                </a>
                <a href="/register">
                  <Button variant="contained">Создать аккаунт</Button>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}


export default Header;