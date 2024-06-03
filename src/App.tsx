import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert
          onClose={() => setAlertVisible(false)}
          children="You have Clicked Me, Now Give me a Snack!"
        ></Alert>
      )}

      <Button color="success" onClick={() => setAlertVisible(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
