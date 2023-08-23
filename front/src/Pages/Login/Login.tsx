import Button from '@/Components/Button';

import styles from './Login.module.scss';


function Login() {
  return (
    <div className={styles.root}>
      <div className={styles.login}>
        <h5 className={styles.title}> Вход в аккаунт</h5>

        <input
          className={styles.input}
          placeholder="E-Mail"
        />
        <input
          className={styles.input}
          placeholder="Пароль"
        />
        <Button variant="contained" fullWidth>
          Войти
        </Button>

      </div>
    </div>
  )
}


export default Login;