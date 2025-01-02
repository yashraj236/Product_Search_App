import React from "react";

const SortFilter = ({ onSort, onFilter }) => {
  return (
    <div>
      <button onClick={() => onSort("asc")}>Sort by Rating (Asc)</button>
      <button onClick={() => onSort("desc")}>Sort by Rating (Desc)</button>
      <select onChange={(e) => onFilter(e.target.value)}>
        <option value="">All Brands</option>
        <option value="Apple">Apple</option>
        <option value="Samsung">Samsung</option>
        <option value="Sony">Sony</option>
      </select>
    </div>
  );
};

export default SortFilter;