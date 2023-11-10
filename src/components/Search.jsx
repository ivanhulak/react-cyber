import React from "react";
import search_icon from '../assets/svg/search.svg';

export const Search = ({ className, value, setSearchValue }) => {

  const handleValueChange = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <div className={`${className} search`}>
      <img src={search_icon} alt="search icon" />
      <input
        className={`${className}-input search-input`}
        type="text"
        placeholder="Search"
        value={value}
        onChange={handleValueChange}
      />
    </div>
  );
};
