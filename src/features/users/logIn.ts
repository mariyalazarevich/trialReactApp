import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface IUser {
  readonly login: string | null;
  readonly token: string | null;
  readonly _id: string | null;
}

type UsersState = {
  user: IUser;
  status: string;
  error: string | undefined;
};

const initialState: UsersState = {
  user: { login: '', token: '', _id: '' },
  status: 'idle',
  error: undefined,
};

export const logIn = createAsyncThunk(
  'users/logIn',
  async (user: { login: string; password: string }) => {
    const response = await axios.post(`http://localhost:8000/api/users/login`, user, {
      withCredentials: true,
    });
    return response.data;
  }
);

const logInSlice = createSlice({
  name: 'logIn',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(logIn.pending, state => {
        state.status = 'loading';
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default logInSlice.reducer;
