import Button from '@/Components/Button';

import styles from './Registration.module.scss';

function Registration() {

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h5 className={styles.title}>Создание аккаунта</h5>

        <input
          className={styles.input}
          placeholder="Полное имя"
        />
        <input
          className={styles.input}
          placeholder="E-Mail"
        />
        <input
          className={styles.input}
          placeholder="Пароль"
        />
        <Button variant="contained" fullWidth>
          Зарегистрироваться
        </Button>

      </div>
    </div>
  )
}


export default Registration;