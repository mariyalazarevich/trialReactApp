import axios from 'axios';

export const createOrder = async (order: {
  date: Date;
  time: string;
  email: string;
  name: string;
  surname: string;
  tel: string;
}) => {
  try {
    const response = await axios.post('http://localhost:8000/api/orders/order', order, {
      withCredentials: true,
    });
    return { status: response.status, message: 'OK' };
  } catch (error) {
    return { status: 400, message: error };
  }
};

export const getAllOrders = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/orders/orders', {
      withCredentials: true,
    });
    return { status: response.status, data: response.data };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { status: error.response?.status, message: error.response?.data?.message };
    }
    return { status: 400, message: error };
  }
};

export const getOrdersByDate = async (date: Date) => {
  try {
    const response = await axios.get(`http://localhost:8000/api/orders/orders/date/${date}`, {
      withCredentials: true,
    });
    return { status: response.status, data: response.data };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { status: error.response?.status, message: error.response?.data?.message };
    }
    return { status: 400, message: error };
  }
};

export const getOrdersByUserID = async (userID: string | null) => {
  try {
    const response = await axios.get(`http://localhost:8000/api/orders/orders/userID/${userID}`, {
      withCredentials: true,
    });
    return { status: response.status, data: response.data };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { status: error.response?.status, message: error.response?.data?.message };
    }
    return { status: 400, message: error };
  }
};

export const getOrderByID = async (id: string) => {
  try {
    const response = await axios.get(`http://localhost:8000/api/orders/orders/${id}`, {
      withCredentials: true,
    });
    return { status: response.status, data: response.data };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { status: error.response?.status, message: error.response?.data?.message };
    }
    return { status: 400, message: error };
  }
};

export const updateOrderByID = async (
  id: string,
  order: {
    data: string;
    time: string;
    email: string;
    name: string;
    surname: string;
    tel: string;
    userID: string;
  }
) => {
  try {
    const response = await axios.patch(
      `http://localhost:8000/api/orders/update/order/${id}`,
      order,
      { withCredentials: true }
    );
    return { status: response.status, data: response.data };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { status: error.response?.status, message: error.response?.data?.message };
    }
    return { status: 400, message: error };
  }
};

export const deleteOrderByID = async (id: string) => {
  try {
    const response = await axios.delete(`http://localhost:8000/api/orders/delete/order/${id}`, {
      withCredentials: true,
    });
    return { status: response.status, data: response.data };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { status: error.response?.status, message: error.response?.data?.message };
    }
    return { status: 400, message: error };
  }
};
