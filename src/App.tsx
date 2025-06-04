import './App.css';
import { Heading } from 'ui/Heading';
import { AuthContextPage } from './pages/AuthContextPage';
import { AuthContext } from './components/Auth/AuthContext';
import { useState } from 'react';

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Heading variant="h1" className="text-blue-600">
        Blue header
      </Heading>

      <AuthContext value={{ isLoggedIn }}>
        <AuthContextPage />
        {/* <ViewportPage /> */}
        {/* <CounterPage /> */}
        {/* <RegistrationState /> */}
        {/* <GeneratorPage /> */}
        {/* <Text>Hello!</Text> */}
        {/* <Button bgColor="clouds" color="carrot" disabled>
        Click
      </Button> */}
      </AuthContext>
    </div>
  );
}

export default App;
