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

// Case -1

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "click me to visit google",
// };

// Case -2

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);


// Case -3

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to visit google"
);

ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
