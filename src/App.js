import React from "react";
import FormInput from "./component/FormInput";
import Filter from "./component/Filter";
import Index from "./component/Index";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="main">
        <FormInput></FormInput>
        <Filter></Filter>
        <Index></Index>
      </div>
    </>
  );
};

export default App;
