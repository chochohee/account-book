import React from "react";
import "./ItemList.css";
// import Card from "./UI/Card";

const ItemList = (props) => {
  const items = props.item;
  return (
    <div>
      <article className="item-list">
        {items.map((item) => (
          <div key={item.id} className="item-list_product">
            <div>구매물품 : {item.title}</div>
            <div>가격 : ₩{item.price}</div>
            <div>품목 : {item.type}</div>
            <div>{item.memo && <span>메모 : {item.memo}</span>}</div>
            <div>재구매 : {item.choice === "yes" ? "0" : "X"}</div>
          </div>
        ))}
      </article>
    </div>
  );
};

export default ItemList;
