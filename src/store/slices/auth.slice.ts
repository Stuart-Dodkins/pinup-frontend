import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../models/user';
import { AuthParams, UserAuth, BusinessAuth } from '../../models/auth';
import { Business } from '../../models/business';
import { RootState } from '../store';

export interface AuthState {
  user: User | null;
  business?: Business | null;
  token: string | null;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  business: null,
  token: null,
  error: null,
};

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    logout: (state) => {
      return {
        ...state,
        user: null,
        business: null,
        token: null,
        error: null,
      };
    },
    setUserAuth: (state, action: PayloadAction<UserAuth>) => {
      return {
        ...state,
        business: null,
        user: action.payload.user,
        token: action.payload.token,
        error: null,
      };
    },
    setUser: (state, action: PayloadAction<User>) => {
      return {
        ...state,
        user: action.payload,
      };
    },
    setBusinessAuth: (state, action: PayloadAction<BusinessAuth>) => {
      return {
        ...state,
        user: null,
        business: action.payload.business,
        token: action.payload.token,
        error: null,
      };
    },
    setBusiness: (state, action: PayloadAction<Business>) => {
      return {
        ...state,
        business: action.payload,
      };
    },
  },
});

export const { logout, setUserAuth, setUser, setBusinessAuth, setBusiness } =
  authenticationSlice.actions;
export const selectUser = (state: RootState) => state.auth.user;
export const selectBusiness = (state: RootState) => state.auth.business;
export const selectToken = (state: RootState) => state.auth.token
