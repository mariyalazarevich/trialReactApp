import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IAuthForm } from 'src/interfaces/authFromInterface';

type UsersState = {
  status: string;
  error: string | undefined;
};

const initialState: UsersState = {
  status: 'idle',
  error: undefined,
};

export const createUser = createAsyncThunk('users/createUser', async (user: IAuthForm) => {
  const response = await axios.post('http://localhost:8000/api/users/user', user, {
    withCredentials: true,
  });
  return response.data;
});

const createUserSlice = createSlice({
  name: 'createUser',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createUser.pending, state => {
        state.status = 'loading';
      })
      .addCase(createUser.fulfilled, state => {
        state.status = 'successfull';
      })
      .addCase(createUser.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      });
  },
});

export default createUserSlice.reducer;
