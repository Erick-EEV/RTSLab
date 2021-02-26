export const ADD_SEARCH_TERM = "ADD_SEARCH_TERM";
export const ADD_SEARCH_RESULTS = "ADD_SEARCH_RESULTS";
//creating type variables to help organize and seperate future data

export const addSearchTerm = (search) => {
  return { type: ADD_SEARCH_TERM, searchKeyword: search };
};
//addSearchTerm is an action taking user input as an argument
//Then saving as an object with a type to distinguish/seperate from other Data object such as below

export const addSearchResults = (results) => {
  return { type: ADD_SEARCH_RESULTS, searchResults: results };
};
//addSearchResults accepts an array/results from the api query and creates an object
//Adding a type and a keyword of searchResults to access later when using useSelector
