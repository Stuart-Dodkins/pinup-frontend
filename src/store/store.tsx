import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { iconColorSlice } from './slices/user-icon-slice';
import { authenticationSlice } from './slices/auth.slice';
import { userApi } from './api/userApi';
import { businessApi } from './api/businessApi';
import { authApi } from './api/authApi';

const authPersistedReducer = persistReducer(
  {
    key: 'authentication',
    storage,
  },
  authenticationSlice.reducer
);

const iconColorPersistedReducer = persistReducer(
  {
    key: 'icon-color',
    storage,
  },
  iconColorSlice.reducer
);

export const store = configureStore({
  reducer: {
    auth: authPersistedReducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [businessApi.reducerPath]: businessApi.reducer,
    iconColor: iconColorPersistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(authApi.middleware, userApi.middleware, businessApi.middleware),
});

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
