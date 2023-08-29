import { RootState } from "@/store";

/** селектор данных из state.auth */
export const selectAuthData = (state: RootState) => state.auth;

/** проверка наличия данных о пользователе */
export const selectIsAuth = (state: RootState) => Boolean(state.auth.data);