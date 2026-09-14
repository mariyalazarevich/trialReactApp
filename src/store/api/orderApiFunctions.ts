import axios from "axios"

export const createOrder = (order: {
    date: Date,
    time: string,
    email: string,
    name: string,
    surname: string,
    tel: string,
}) => {
    axios.post('http://localhost:8000/api/orders/order', order).then((res) => console.log(res.data));
}