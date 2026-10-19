import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { EStatus as eStatus } from 'src/enumerations/statusEnumeration';
import { IReduxState } from 'src/interfaces/reduxStateInterface';
import { IUser } from 'src/interfaces/userInterface';

type UsersState = IReduxState & {
  users: IUser[];
};

const initialState: UsersState = {
  users: [],
  status: eStatus.idle,
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
        state.status = eStatus.loading;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.status = eStatus.successfull;
        state.users = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.status = eStatus.error;
        state.error = action.error.message;
      });
  },
});

export default allUsersSlice.reducer;
