import React from "react";
import "./Filter.css";

const Filter = () => {
  return (
    <article className="filter-list">
      <select>
        <option>유형 필터</option>
      </select>
      <select>
        <option>정렬 기준</option>
      </select>
      <input type="date" />
      <input type="date" />
    </article>
  );
};

export default Filter;
