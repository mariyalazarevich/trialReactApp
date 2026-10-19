import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { EStatus as eStatus } from 'src/enumerations/statusEnumeration';
import { IReduxState } from 'src/interfaces/reduxStateInterface';
import { IOrder } from 'src/interfaces/orderInterface';

type OrdersState = IReduxState & {
  orders: IOrder[];
};

const initialState: OrdersState = {
  orders: [],
  status: eStatus.idle,
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
        state.status = eStatus.loading;
      })
      .addCase(getAllOrders.fulfilled, (state, action) => {
        state.status = eStatus.successfull;
        state.orders = action.payload;
      })
      .addCase(getAllOrders.rejected, (state, action) => {
        state.status = eStatus.error;
        state.error = action.error.message;
      });
  },
});

export default allOrdersSlice.reducer;
