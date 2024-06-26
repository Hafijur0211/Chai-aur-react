import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  // Object
  let myObj = {
    username: "hafijur",
    age: 21,
  };

  // Array
  let newArr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Card username="Hafijur" btnText="click me"/>
      <Card username="Rahman" btnText="visit me" />
    </>
  );
}

export default App;
