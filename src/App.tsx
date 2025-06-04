import './App.css';
import { Heading } from 'ui/Heading';
// import { AuthContextPage } from './pages/AuthContextPage';
import { AuthProvider } from './components/Auth/AuthContext';
import { ThemeProvider, ThemeSwitcher } from './components/Theme';
// import { RegistrationFormRefsPage } from './pages/RagistrationFormRefsPage';
// import { RegistrationFormState } from './components/RegistrationFormState';
import { RegistrationFormRHFPage } from './pages/RagistrationFormRefsRHF';

function App() {
  return (
    <div>
      <Heading variant="h1" className="text-blue-600">
        Blue header
      </Heading>

      <ThemeProvider>
        <ThemeSwitcher />
        <AuthProvider>
          {/* <ThemeProvider theme="dark"> */}
          {/* <ViewportPage /> */}

          <RegistrationFormRHFPage />
          {/* <RegistrationFormRefsPage /> */}
          {/* <RegistrationFormState /> */}
          {/* <AuthContextPage /> */}
          {/* <ViewportPage /> */}
          {/* <CounterPage /> */}
          {/* <RegistrationState /> */}
          {/* <GeneratorPage /> */}
          {/* <Text>Hello!</Text> */}
          {/* <Button bgColor="clouds" color="carrot" disabled>
        Click
      </Button> */}
          {/* </ThemeProvider> */}
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
