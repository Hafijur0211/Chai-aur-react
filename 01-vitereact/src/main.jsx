import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <>
      <h1>Custom App</h1>
    </>
  );
}

const ReactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me to visit google",
};

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

ReactDOM.createRoot(document.getElementById("root")).render(anotherElement);
