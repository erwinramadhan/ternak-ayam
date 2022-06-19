import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store';

interface IUserState {
  name: string;
  gender: string;
}

const initialState: IUserState = {
  name: '',
  gender: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{name: string; gender: string}>) => {
      state.name = action.payload.name;
      state.gender = action.payload.gender;
    },
  },
});

export const {setUser} = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
