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
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
