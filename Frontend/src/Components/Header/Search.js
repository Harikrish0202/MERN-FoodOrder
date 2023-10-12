import React, { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Search() {
  const [searchValue, setsearchValue] = useState("");
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    if (searchValue) {
      navigate(`eats/stores/search/${searchValue}`);
    } else {
      navigate("/");
    }
    setsearchValue("");
  };

  const iconDisappear = (event) => {
    setsearchValue(event.target.value);
  };
  return (
    <form className="d-flex search_form" role="search" onSubmit={submitHandler}>
      <input
        className="form-control  search_input "
        type="search"
        placeholder="Enter Your Favourite Restaurant"
        aria-label="Search"
        value={searchValue}
        name="search"
        onChange={iconDisappear}
      />
      {!searchValue && (
        <button id="search_btn" type="button" className="search_icon">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      )}
    </form>
  );
}

export default Search;
