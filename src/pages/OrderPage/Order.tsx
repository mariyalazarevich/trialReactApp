import { Footer } from '@components/footer/Footer';
import { Header } from '@components/header/Header';
import { OrderForm } from '@components/orderForm/OrderForm';
import { UserContext } from 'src/contexts/userContext';

export const Order = () => {
  return (
    <>
      <UserContext.Consumer>{value => <Header {...value} />}</UserContext.Consumer>
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
      <UserContext.Consumer>{value => <OrderForm {...value} />}</UserContext.Consumer>
      <Footer></Footer>
    </>
  );
};
