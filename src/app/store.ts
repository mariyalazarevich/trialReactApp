import { configureStore } from '@reduxjs/toolkit';
import allUsersReducer from '../features/users/getUsers';
import logInReducer from '../features/users/logIn';
import createUserReducer from '../features/users/createUser';
import ordersReducer from '../features/orders/getOrders';
import createOrderReducer from '../features/orders/createOrder';
import authorizedUserReducer from 'src/features/user/authorizedUser';

export const store = configureStore({
  reducer: {
    allUsers: allUsersReducer,
    logIn: logInReducer,
    createUser: createUserReducer,

    orders: ordersReducer,
    createOrder: createOrderReducer,

    authorizedUser: authorizedUserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
