import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { EStatus as eStatus } from 'src/enumerations/statusEnumeration';
import { IReduxState } from 'src/interfaces/reduxStateInterface';

interface IUser {
  user: {
    readonly login: string | null;
    readonly token: string | null;
    readonly _id: string | null;
  };
}

type UsersState = IReduxState & IUser;

const initialState: UsersState = {
  user: { login: '', token: '', _id: '' },
  status: eStatus.idle,
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
  reducers: {
    resetLoginState: () => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(logIn.pending, state => {
        state.status = eStatus.loading;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.status = eStatus.successfull;
        state.user = action.payload;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.status = eStatus.error;
        state.error = action.error.message;
      });
  },
});

export default logInSlice.reducer;
export const { resetLoginState } = logInSlice.actions;
