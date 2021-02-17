import { useState } from "react";
import "./styles.css";
import Toast from "./Toast";
export default function App() {
  const [showToast, setShow] = useState(false);
  function Test() {
    if (showToast) {
      return <Toast setShow={setShow} />;
    } else {
      return "";
    }
  }
  function ToggleBtn() {
    if (!showToast) {
      return <button onClick={() => setShow(true)}>Show Toast </button>;
    } else {
      return "";
    }
  }
  return (
    <div className="App">
      <ToggleBtn />
      <Test />
    </div>
  );
}
