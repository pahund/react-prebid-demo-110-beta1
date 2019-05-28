import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

if (window.useReactPrebid) {
  ReactDOM.render(<App />, document.getElementById('root'));
} else {
  console.info('React app disabled');
}
