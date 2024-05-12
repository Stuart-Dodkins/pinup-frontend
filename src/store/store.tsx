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
import { userSlice } from './slices/user.slice';

const userSlicePersistedReducer = persistReducer(
  {
    key: 'user',
    storage,
  },
  userSlice.reducer
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
    user: userSlicePersistedReducer,
    iconColor: iconColorPersistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(),
});

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
