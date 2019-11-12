import React from "react";
import ReactDOM from "react-dom";
import * as qs from "qs";

import "./styles.css";

const x = () => {
  const a = "?abc=123&123=abc";
  const b = qs.parse(a, { ignoreQueryPrefix: true });
  return b;
};
const s = () => {
  const a = { back: "home", oid: 123 };
  const b = qs.stringify(a, { addQueryPrefix: true });
  return b;
};

function App() {
  return (
    <div className="App">
      <h1>my testing</h1>
      {JSON.stringify(x())}
      <br />
      {s()}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
