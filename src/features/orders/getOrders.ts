import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { EStatus as eStatus } from 'src/enumerations/statusEnumeration';
import { IReduxState } from 'src/interfaces/reduxStateInterface';
import { IOrder } from 'src/interfaces/orderInterface';

type AllOrdersState = IReduxState & {
  orders: IOrder[];
};

type UserOrdersState = IReduxState & {
  orders: IOrder[];
};

type OrderState = {
  allOrders: AllOrdersState;
  ordersByUserID: UserOrdersState;
};

const initialState: OrderState = {
  allOrders: {
    orders: [],
    status: eStatus.idle,
    error: undefined,
  },
  ordersByUserID: {
    orders: [],
    status: eStatus.idle,
    error: undefined,
  },
};

export const getAllOrders = createAsyncThunk('orders/getAllOrders', async () => {
  const response = await axios.get('http://localhost:8000/api/orders/orders', {
    withCredentials: true,
  });
  return response.data;
});

export const getOrdersByUserID = createAsyncThunk(
  'orders/getOrdersByUserID',
  async (userID: string | null) => {
    const response = await axios.get(`http://localhost:8000/api/orders/orders/userID/${userID}`, {
      withCredentials: true,
    });
    return response.data;
  }
);

const allOrdersSlice = createSlice({
  name: 'allUsers',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllOrders.pending, state => {
        state.allOrders.status = eStatus.loading;
      })
      .addCase(getAllOrders.fulfilled, (state, action) => {
        state.allOrders.status = eStatus.successfull;
        state.allOrders.orders = action.payload;
      })
      .addCase(getAllOrders.rejected, (state, action) => {
        state.allOrders.status = eStatus.error;
        state.allOrders.error = action.error.message;
      })
      .addCase(getOrdersByUserID.pending, state => {
        state.ordersByUserID.status = eStatus.loading;
      })
      .addCase(getOrdersByUserID.fulfilled, (state, action) => {
        state.ordersByUserID.status = eStatus.successfull;
        state.ordersByUserID.orders = action.payload;
      })
      .addCase(getOrdersByUserID.rejected, (state, action) => {
        state.ordersByUserID.status = eStatus.error;
        state.ordersByUserID.error = action.error.message;
      });
  },
});

export default allOrdersSlice.reducer;
