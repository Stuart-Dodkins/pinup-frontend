import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface ColorState {
  iconColor: string | null;
}

const initialState: ColorState = {
  iconColor: null,
};

export const iconColorSlice = createSlice({
  name: 'iconColor',
  initialState,
  reducers: {
    setIconColor: (state, action: PayloadAction<string>) => {
      state.iconColor = action.payload
    },
  },
});

export const selectColor = (state: RootState) => state.iconColor.iconColor;
export const { setIconColor } = iconColorSlice.actions;