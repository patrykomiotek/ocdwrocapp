import { Button, Text } from "./ui";

import "./App.css";
import { GeneratorPage } from "./pages/GeneratorPage";
import { RegistrationState } from "./pages/RagistrationState";
import { CounterPage } from "./pages/ConterPage";
import { ViewportPage } from "./pages/ViewportPage";

function App() {
  return (
    <div>
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
