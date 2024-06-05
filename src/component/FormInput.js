import React, { useState } from "react";
import "./FormInput.css";

const FormInput = ({ getFormInputData }) => {
  const [objectState, setObjectState] = useState({
    name: "",
    price: 0,
    type: "",
    today: new Date(),
    checked: false,
    memo: "",
    choice: "",
  });

  const inputNameHandler = (event) => {
    setObjectState((preveState) => ({
      ...preveState,
      name: event.target.value,
    }));
    console.log("name");
  };

  const inputPriceHandler = (event) => {
    setObjectState((preveState) => ({
      ...preveState,
      price: event.target.value,
    }));
    console.log("price");
  };

  const inputTypeHandler = (event) => {
    setObjectState((preveState) => ({
      ...preveState,
      type: event.target.value,
    }));
    console.log("type");
  };

  const inputDateHandler = (event) => {
    setObjectState((preveState) => ({
      ...preveState,
      Date: event.target.value,
    }));
    console.log("date");
  };

  const inputCheckboxHandler = (event) => {
    setObjectState((preveState) => ({
      ...preveState,
      checked: event.target.checked,
    }));
    console.log("check");
  };

  const inputMemoHandler = (event) => {
    setObjectState((preveState) => ({
      ...preveState,
      memo: event.target.value,
    }));
    console.log("memo");
  };

  const inputRadioHandler = (event) => {
    setObjectState((preveState) => ({
      ...preveState,
      choice: event.target.value,
    }));
    console.log(event.target.value);
  };

  const buttonSubmitHandler = (event) => {
    event.preventDefault();

    getFormInputData(objectState);

    setObjectState({
      name: "",
      price: 0,
      type: "",
      today: new Date(),
      checked: false,
      memo: "",
      choice: "",
    });

    console.log("submit");
  };

  return (
    <>
      <article className="form">
        <div className="form-group">
          <label className="main-label" htmlFor="name">
            이름
          </label>
          <input
            type="text"
            id="name"
            onChange={inputNameHandler}
            value={objectState.name}
          />
        </div>
        <div className="form-group">
          <label className="main-label" htmlFor="price">
            가격
          </label>
          <input
            type="number"
            id="price"
            onChange={inputPriceHandler}
            value={objectState.price}
          />
        </div>
        <div className="form-group">
          <label className="main-label" htmlFor="type">
            유형
          </label>
          <select
            id="type"
            onChange={inputTypeHandler}
            value={objectState.type}
          >
            <option value={"선택"}>선택</option>
            <option value={"생필품"}>생필품</option>
            <option value={"식료품"}>식료품</option>
          </select>
        </div>
        <div className="form-group">
          <label className="main-label" htmlFor="date">
            구입 날짜
          </label>
          <input
            type="date"
            id="date"
            onChange={inputDateHandler}
            value={objectState.Date}
          />
        </div>
        <div className="form-group">
          <label className="main-label"> 메모</label>
          <input
            type="checkbox"
            id="checkbox"
            onChange={inputCheckboxHandler}
            checked={objectState.checked}
          />
          <p>메모 작성</p>
          {objectState.checked && (
            <input
              type="text"
              id="memo"
              onChange={inputMemoHandler}
              value={objectState.memo}
            />
          )}
        </div>
        <div className="form-group">
          <label className="main-label">재구매 의사</label>
          <input
            type="radio"
            name="choice"
            id="choice-yes"
            value="yes"
            onChange={inputRadioHandler}
            checked={objectState.choice === "yes"}
          />
          <p>한다</p>
          <input
            type="radio"
            name="choice"
            id="choice-no"
            value="no"
            onChange={inputRadioHandler}
            checked={objectState.choice === "no"}
          />
          <p>안한다</p>
        </div>
        <div className="form-group">
          <button className="submit-button" onClick={buttonSubmitHandler}>
            Submit
          </button>
        </div>
      </article>
    </>
  );
};

export default FormInput;
