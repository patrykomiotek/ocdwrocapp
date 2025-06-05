import './App.css';

import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { router } from './routes';
import { AuthProvider } from './components/Auth/AuthContext';
import { ThemeProvider } from './components/Theme';
// import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      {/* <ErrorBoundary fallback={<p>Another component!</p>}> */}
      <ThemeProvider>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={true} />
          </QueryClientProvider>
        </AuthProvider>
      </ThemeProvider>
      {/* </ErrorBoundary> */}
    </div>
  );
}

export default App;
