import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSearchTerm, addSearchResults } from "../redux/actionTypes";

const SearchBar = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  //useState to save user input in handleOnChange to later interpilate in fetch request

  const dispatch = useDispatch();
  //saving dispatch to local variable to access later in submitSearch function

  const handleOnChange = (event) => {
    event.preventDefault();
    setSearchKeyword(event.target.value);
  };
  //Saves User input to useState

  const submitSearch = (event) => {
    event.preventDefault();
    dispatch(addSearchTerm(searchKeyword));
    fetch(`http://hn.algolia.com/api/v1/search?query=${searchKeyword}`)
      .then((resp) => resp.json())
      .then((result) => dispatch(addSearchResults(result.hits)));
  };
  //dispatches the addSearchTerm action with state searchKeyword/Also making fetch request
  //dispatches the addSearchResults action with fetch request response .hits

  return (
    <div className="search-bar">
      <div className="search-form">
        <form onSubmit={(event) => submitSearch(event)}>
          <input onChange={(event) => handleOnChange(event)}></input>
          <div className="submit-button">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
