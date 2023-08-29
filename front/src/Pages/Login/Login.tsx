import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/store';
import {
  // selectAuthData,
  selectIsAuth,
} from '@/store/slices/auth/selectors';
import { setUserData } from '@/store/slices/auth/requests';
import Button from '@/Components/Button';

import styles from './Login.module.scss';



function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isAuth = useSelector(selectIsAuth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "test112@test.ru",
      password: "12345",
    },
    mode: "onChange"
  });

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  const onSubmit = async (values: { email: string; password: string }) => {
    const data = await dispatch(setUserData(values));
    if (!data.payload) {
      alert('Не удалось авторизоваться');
    } else {
      window.localStorage.setItem('token', data.payload.token);
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.login}>
        <h5 className={styles.title}> Вход в аккаунт</h5>
        <form onSubmit={handleSubmit(onSubmit)}  >
          <input
            type='email'
            className={styles.input}
            placeholder={errors.email?.message || "Укажите почту"}
            {...register('email', { required: "Укажите почту" })}
          />
          <input
            className={styles.input}
            placeholder={errors.password?.message || "Укажите пароль"}
            {...register('password', { required: "Укажите пароль" })}
          />
          <Button variant="contained" fullWidth type="submit">
            Войти
          </Button>
        </form>
      </div>
    </div>
  )
}


export default Login;