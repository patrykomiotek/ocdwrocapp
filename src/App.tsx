import { ViewportPage } from '@/pages/ViewportPage';

import './App.css';
import { Heading } from 'ui/Heading';

function App() {
  return (
    <div>
      <Heading variant="h1" className="text-blue-600">
        Blue header
      </Heading>

      <ViewportPage />
      {/* <CounterPage /> */}
      {/* <RegistrationState /> */}
      {/* <GeneratorPage /> */}
      {/* <Text>Hello!</Text> */}
      {/* <Button bgColor="clouds" color="carrot" disabled>
        Click
      </Button> */}
    </div>
  );
}

export default App;
