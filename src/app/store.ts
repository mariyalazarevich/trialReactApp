import { configureStore } from '@reduxjs/toolkit';
import allUsersReducer from '../features/users/getUsers';
import logInReducer from '../features/users/logIn';
import createUserReducer from '../features/users/createUser';
import allOrdersReducer from '../features/orders/getOrders';
import ordersByUserIDSliceReducer from '../features/orders/getOrdersByUserID';
import createOrderReducer from '../features/orders/createOrder';

export const store = configureStore({
  reducer: {
    allUsers: allUsersReducer,
    logIn: logInReducer,
    createUser: createUserReducer,

    allOrders: allOrdersReducer,
    ordersByUserID: ordersByUserIDSliceReducer,
    createOrder: createOrderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
