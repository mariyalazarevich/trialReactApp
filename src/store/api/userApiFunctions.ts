import axios from 'axios';

export const createUser = async (user: {
  name: string;
  surname: string;
  email: string;
  login: string;
  password: string;
}) => {
  try {
    const response = await axios.post('http://localhost:8000/api/users/user', user);
    return { status: response.status, message: 'OK' };
  } catch (error) {
    return { status: 400, message: error };
  }
};

export const getAllUsers = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/users/users');
    return { status: response.status, data: response.data };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { status: error.response?.status, message: error.response?.data?.message };
    }
    return { status: 400, message: error };
  }
};

export const getUserByID = async (id: string) => {
  try {
    const response = await axios.get(`http://localhost:8000/api/users/users/${id}`);
    return { status: response.status, data: response.data };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { status: error.response?.status, message: error.response?.data?.message };
    }
    return { status: 400, message: error };
  }
};

export const updateUserByID = async (
  id: string,
  user: {
    name: string;
    surname: string;
    email: string;
    login: string;
    password: string;
  }
) => {
  try {
    const response = await axios.patch(`http://localhost:8000/api/users/update/user/${id}`, user);
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
    const response = await axios.delete(`http://localhost:8000/api/users/delete/user/${id}`);
    return { status: response.status, data: response.data };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { status: error.response?.status, message: error.response?.data?.message };
    }
    return { status: 400, message: error };
  }
};

export const logIn = async (user: { login: string; password: string }) => {
  try {
    const response = await axios.post(`http://localhost:8000/api/users/login`, user);
    return { status: response.status, data: response.data };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { status: error.response?.status, message: error.response?.data?.message };
    }
    return { status: 400, message: error };
  }
};
