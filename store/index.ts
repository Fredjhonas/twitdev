import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import ReduxLogger from 'redux-logger';
import authReducer from '../auth/authSlice';
const middleware = (getDefaultMiddleware: any) => getDefaultMiddleware().concat(ReduxLogger);

export const store = configureStore({
  middleware,
  reducer: {
    auth: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
