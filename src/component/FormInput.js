import React from "react";
import "./FormInput.css";

const FormInput = (props) => {
  return (
    <>
      <article className="form">
        <div className="form-group">
          <label className="main_label" htmlFor="name">
            이름
          </label>
          <input type="string" id="name" />
        </div>
        <div className="form-group">
          <label className="main_label" htmlFor="price">
            가격
          </label>
          <input type="number" id="price" />
        </div>
        <div className="form-group">
          <label className="main_label" htmlFor="type">
            유형
          </label>
          <select id="type">
            <option value={"선택"}>선택</option>
            <option value={"생필품"}>생필품</option>
            <option value={"식료품"}>식료품</option>
          </select>
        </div>
        <div className="form-group">
          <label className="main_label" htmlFor="date">
            구입 날짜
          </label>
          <input type="date" id="date" />
        </div>
        <div className="form-group">
          <label className="main_label"> 메모</label>
          <input type="checkbox" id="memo-checkbox" />
          <p>메모 작성</p>
          <input type="text" />
        </div>
        <div className="form-group">
          <label className="main_label">재구매 의사</label>
          <input type="radio" name="choice" id="choice-yes" />
          <p>한다</p>
          <input type="radio" name="choice" id="choice-no" />
          <p>안한다</p>
        </div>
        <div className="form-group">
          <button className="submit-button">Submit</button>
        </div>
      </article>
    </>
  );
};

export default FormInput;
