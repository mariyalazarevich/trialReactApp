import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from 'src/interfaces/userInterface';
import axios from 'axios';

type UsersState = {
  users: IUser[];
  status: string;
  error: string | undefined;
};

const initialState: UsersState = {
  users: [],
  status: 'idle',
  error: undefined,
};

export const getAllUsers = createAsyncThunk('users/getAllUsers', async () => {
  const response = await axios.get('http://localhost:8000/api/users/users', {
    withCredentials: true,
  });
  return response.data;
});

const allUsersSlice = createSlice({
  name: 'allUsers',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllUsers.pending, state => {
        state.status = 'loading';
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default allUsersSlice.reducer;
