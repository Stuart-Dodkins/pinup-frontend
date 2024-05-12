import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserFormData, UserEditFormData } from '../../models/user';
import { RootState } from '../store';

export interface UserState {
  firstLogin: boolean;
  user: {
    userId: string;
    firstName: string;
    lastName: string;
    contactInfo: {
      email?: string;
      phone?: string;
      address: string;
    };
  };
}

const initialState: UserState = {
  firstLogin: false,
  user: {
    userId: '',
    firstName: '',
    lastName: '',
    contactInfo: {
      email: undefined,
      phone: undefined,
      address: '',
    },
  },
};

export const userSlice = createSlice({
  name: 'user-slice',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserFormData>) => {
      return {
        ...state,
        user: {
          userId: '',
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          contactInfo: {
            email: action.payload.contactInfo.email,
            phone: action.payload.contactInfo.phone,
            address: action.payload.contactInfo.address,
          },
        },
      };
    },
    setFirstLogin: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        firstLogin: action.payload,
      };
    },
    updateUser: (state, action: PayloadAction<UserEditFormData>) => {
      return {
        ...state,
        user: {
          userId: '',
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          contactInfo: {
            email: action.payload.contactInfo.email,
            phone: action.payload.contactInfo.phone,
            address: action.payload.contactInfo.address,
          },
        },
      };
    },
  },
});

export const { setUser, updateUser, setFirstLogin } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;
export const selectFirstLogin = (state: RootState) => state.user.firstLogin;
