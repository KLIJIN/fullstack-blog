import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "@/Components/Button";
import { useAppDispatch } from "@/store";
import { selectIsAuth } from "@/store/slices/auth/selectors";
import { setNewUser } from "@/store/slices/auth/requests";

import styles from "./Registration.module.scss";
import { RegisterForm } from "./types";

function Registration() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isAuth = useSelector(selectIsAuth);

  const {
    register,
    handleSubmit
  } = useForm({
    defaultValues: {
      fullName: "fullName",
      email: "test112@test.ru",
      password: "12345"
    },
    mode: "onChange"
  });

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  const onSubmit = async (values: RegisterForm) => {
    const data = await dispatch(setNewUser(values));
    if (!data.payload) {
      alert("Не удалось зарегистрировать Учетную Запись");
    } else {
      window.localStorage.setItem("token", data.payload.token);
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h5 className={styles.title}>Создание аккаунта</h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className={styles.input}
            placeholder="Полное имя"
            {...register("fullName", { required: "Укажите Логин" })}
          />
          <input
            className={styles.input}
            type="email"
            placeholder="E-Mail"
            {...register("email", { required: "Укажите почту" })}
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Пароль"
            {...register("password", { required: "Укажите пароль" })}
          />
          <Button variant="contained" fullWidth type="submit">
            Зарегистрироваться
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
