import { Footer } from '@components/footer/Footer';
import { Header } from '@components/header/Header';
import { OrderForm } from '@components/orderForm/OrderForm';

export const Order = () => {
  return (
    <>
      <Header></Header>
      <h1
        style={{
          margin: '10px 0px',
          textAlign: 'center',
          lineHeight: '151%',
          fontSize: '22px',
          fontWeight: '600',
          letterSpacing: '0%',
        }}
      >
        Бронирование
      </h1>
      <OrderForm />
      <Footer></Footer>
    </>
  );
};
