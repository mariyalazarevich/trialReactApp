import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type OrdersState = {
  status: string;
  error: string | undefined;
};

interface IOrder {
  dateTime: string;
  email: string;
  name: string;
  surname: string;
  tel: string;
}

const initialState: OrdersState = {
  status: 'idle',
  error: undefined,
};

export const createOrder = createAsyncThunk('orders/createOrder', async (order: IOrder) => {
  const response = await axios.post('http://localhost:8000/api/orders/order', order, {
    withCredentials: true,
  });
  return response.data;
});

const createOrderSlice = createSlice({
  name: 'createOrder',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createOrder.pending, state => {
        state.status = 'loading';
      })
      .addCase(createOrder.fulfilled, state => {
        state.status = 'successfull';
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      });
  },
});

export default createOrderSlice.reducer;
