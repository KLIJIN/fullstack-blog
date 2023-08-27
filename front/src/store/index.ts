import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import posts from './slices/posts';
import fullPost from './slices/fullPost';
 

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    posts: posts,
    fullPost: fullPost,
  },
});

const useAppDispatch = () => useDispatch<AppDispatch>();

export type { RootState, AppDispatch };
export { store as default, useAppDispatch };
