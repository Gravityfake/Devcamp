import "antd/dist/antd.css";
import "./index.css";
import SiderDemo from "./SiderDemo";
import FormComp from "./FormComp";
import React from "react";

function App() {
  return (
    <SiderDemo>
      <h1>Form Register </h1>
      <FormComp />
    </SiderDemo>
  );
}

export default App;