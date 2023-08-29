import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectIsAuth } from '@/store/slices/auth/selectors';
import Button from '@/Components/Button';
import { useAppDispatch } from '@/store';

import styles from './Header.module.scss';
import { logout } from '@/store/slices/auth/auth';


function Header() {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useAppDispatch();
  const onClickLogout = () => {
    if (window.confirm("Вы хотите выйти?")) {
      dispatch(logout());
      window.localStorage.removeItem('token');
    }
  };


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