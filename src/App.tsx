import type { ComponentType } from 'react';
import './App.css';
import { Main } from './pages/MainPage/Main';
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';

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
      <Main />
    </ErrorBoundary>
  );
}

export default App;
