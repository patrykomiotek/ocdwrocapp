import './App.css';

import { RouterProvider } from 'react-router-dom';

import { router } from './routes';
import { AuthProvider } from './components/Auth/AuthContext';
import { ThemeProvider } from './components/Theme';

function App() {
  return (
    <div>
      <ThemeProvider>
        <AuthProvider>
          <RouterProvider router={router} />
          {/* <ThemeProvider theme="dark"> */}
          {/* <ViewportPage /> */}

          {/* <RegistrationFormRHFPage /> */}
          {/* <RegistrationFormRefsPage /> */}
          {/* <RegistrationFormState /> */}
          {/* <AuthContextPage /> */}
          {/* <ViewportPage /> */}
          {/* <CounterPage /> */}
          {/* <RegistrationState /> */}
          {/* <GeneratorPage /> */}
          {/* <Text>Hello!</Text> */}
          {/* <Button bgColor="clouds" color="carrot" disabled>Click</Button> */}
          {/* </ThemeProvider> */}
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
