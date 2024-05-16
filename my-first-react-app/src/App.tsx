import { useState } from "react";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/button";

function App() {
  // let items = ["New York", "Tokyo"];
  const [alertVisible, setAlertVisibility] = useState(false);
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>world</Alert>}
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
      <Button
        color="primary"
        onClick={() => {
          setAlertVisibility(true);
        }}
      >
        My Btn
      </Button>
    </div>
  );
}

export default App;
