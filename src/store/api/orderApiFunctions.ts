import axios from 'axios';

export const createOrder = async (order: {
  date: Date;
  time: string;
  email: string;
  name: string;
  surname: string;
  tel: string;
}) => {
  const response = await axios.post('http://localhost:8000/api/orders/order', order);
  return response.status; //как тут взять сообщение с ошибкой существующего заказа
};
