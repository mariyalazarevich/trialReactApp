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
        state.status = eStatus.loading;
      })
      .addCase(getOrdersByUserID.fulfilled, (state, action) => {
        state.status = eStatus.successfull;
        state.orders = action.payload;
      })
      .addCase(getOrdersByUserID.rejected, (state, action) => {
        state.status = eStatus.error;
        state.error = action.error.message;
      });
  },
});

export default ordersByUserIDSlice.reducer;
