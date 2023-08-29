import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import posts from './slices/posts';
import fullPost from './slices/fullPost';
import auth from './slices/auth';
 

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    posts: posts,
    fullPost: fullPost,
    auth: auth,
  },
});

const useAppDispatch = () => useDispatch<AppDispatch>();

export type { RootState, AppDispatch };
export { store as default, useAppDispatch };
