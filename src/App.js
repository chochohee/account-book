import React, { useState } from "react";
import FormInput from "./component/FormInput";
import Filter from "./component/Filter";
import ItemList from "./component/ItemList";
import "./App.css";

const App = () => {
  const [product, setProduct] = useState([
    {
      id: "a1",
      title: "물티슈 1box",
      price: 10000,
      type: "생필품",
      today: new Date(2024, 1, 31),
      checked: false,
      memo: "",
      choice: "yes",
    },
    {
      id: "a2",
      title: "파스타",
      price: 2000,
      type: "식료품",
      today: new Date(2024, 6, 3),
      checked: true,
      memo: "푸실리",
      choice: "yes",
    },
  ]);
  const getFormInputData = (data) => {
    setProduct((preveState) => [
      ...preveState,
      {
        id: Math.random().toString(),
        title: data.name,
        price: data.price,
        type: data.type,
        today: new Date(data.today),
        checked: data.checked,
        memo: data.memo,
        choice: data.choice,
      },
    ]);
  };
  return (
    <>
      <div className="main">
        <FormInput getFormInputData={getFormInputData} />
        <Filter />
        <ItemList item={product} />
      </div>
    </>
  );
};

export default App;
