import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUser {
  readonly login: string | null;
  readonly token: string | null;
  readonly _id: string | null;
}

type UserState = {
  user: IUser;
  isAuthorized: boolean;
};

const userState: UserState = {
  user: { login: null, token: null, _id: null },
  isAuthorized: false,
};

export const authorizedUserSlice = createSlice({
  name: 'authorizedUser',
  initialState: userState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.isAuthorized = true;
    },
  },
});

export const { setUser } = authorizedUserSlice.actions;
export default authorizedUserSlice.reducer;
