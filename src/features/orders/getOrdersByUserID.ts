import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IOrder } from 'src/interfaces/orderInterface';
import axios from 'axios';

type OrdersState = {
  orders: IOrder[];
  status: string;
  error: string | undefined;
};

const initialState: OrdersState = {
  orders: [],
  status: 'idle',
  error: undefined,
};

export const getOrdersByUserID = createAsyncThunk(
  'orders/getOrdersByUserID',
  async (userID: string | null) => {
    const response = await axios.get(`http://localhost:8000/api/orders/orders/userID/${userID}`, {
      withCredentials: true,
    });
    return response.data;
  }
);

const ordersByUserIDSlice = createSlice({
  name: 'ordersByUserID',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getOrdersByUserID.pending, state => {
        state.status = 'loading';
      })
      .addCase(getOrdersByUserID.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.orders = action.payload;
      })
      .addCase(getOrdersByUserID.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default ordersByUserIDSlice.reducer;
