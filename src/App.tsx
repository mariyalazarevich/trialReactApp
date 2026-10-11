import type { ComponentType } from 'react';
import './App.css';
import { Main } from './pages/MainPage/Main';
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';
import { ShowInfoProvider } from './contexts/showInfoContext';
import { Route, Routes, BrowserRouter } from 'react-router';
import { Order } from './pages/OrderPage/Order';
import { YMaps } from '@pbe/react-yandex-maps';
import { Authorization } from './pages/AuthorizationPage/Authorization';
import { Registration } from './pages/RegistrationPage/Registration';
import { UserContext, UserProvider } from './contexts/userContext';
import { Basket } from './pages/BasketPage/Basket';
import { Administration } from './pages/AdminPage/AdminPage';
import { Analytics } from './admin/analityc/Analytics';
import { Clients } from './admin/clients/Clients';
import { CurrentTasks } from './admin/currentTasks/CurrentTasks';
import { Orders } from './admin/orders/Orders';

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: (args: any) => void;
}

function ErrorFallback({
  error,
  resetErrorBoundary,
}: ErrorFallbackProps): ComponentType<FallbackProps> {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        /* Reset logic like cache clearance goes here */
      }}
    >
      <YMaps query={{ apikey: '2b512826-bd93-4fe9-a6a9-da327ae92bf4' }}>
        <ShowInfoProvider>
          <UserProvider>
            <BrowserRouter>
              <Routes>
                <Route path="order" element={<Order />}></Route>
                <Route path="registration" element={<Registration />}></Route>
                <Route path="*" element={<Main />}></Route>
                <Route
                  path="authorization"
                  element={
                    <UserContext.Consumer>
                      {value => <Authorization {...value} />}
                    </UserContext.Consumer>
                  }
                ></Route>
                <Route
                  path="basket"
                  element={
                    <UserContext.Consumer>{value => <Basket {...value} />}</UserContext.Consumer>
                  }
                ></Route>
                <Route path="admin/tasks" element={<CurrentTasks />}></Route>
                <Route path="admin/orders" element={<Orders />}></Route>
                <Route path="admin/clients" element={<Clients />}></Route>
                <Route path="admin/analytics" element={<Analytics />}></Route>
              </Routes>
            </BrowserRouter>
          </UserProvider>
        </ShowInfoProvider>
      </YMaps>
    </ErrorBoundary>
  );
}

export default App;
