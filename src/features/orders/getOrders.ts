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

export const getAllOrders = createAsyncThunk('orders/getAllOrders', async () => {
  const response = await axios.get('http://localhost:8000/api/orders/orders', {
    withCredentials: true,
  });
  return response.data;
});

const allOrdersSlice = createSlice({
  name: 'allUsers',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllOrders.pending, state => {
        state.status = 'loading';
      })
      .addCase(getAllOrders.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.orders = action.payload;
      })
      .addCase(getAllOrders.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default allOrdersSlice.reducer;
