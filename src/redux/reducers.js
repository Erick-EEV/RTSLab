import * as actionTypes from "./actionTypes";
//importing all actionTypes from above file

const initialState = {
  searchTerms: [],
  currentSearchTerm: "",
  searchResultsArray: [],
};
//creating intial state to copy before making updated copy in switch case statement within reducer function

//actionTypes accesses file then ADD_SEARCH_TERM accesses action type
//action.type accesses all actions and says with case statement, if action type -blank-
//make copy of current state and create/return new state with updated data
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_SEARCH_TERM: {
      const { searchKeyword } = action;
      console.log(state);
      return {
        ...state,
        searchTerms: [...state.searchTerms, searchKeyword],
        currentSearchTerm: searchKeyword,
      };
    }
    case actionTypes.ADD_SEARCH_RESULTS: {
      const { searchResults } = action;
      return {
        ...state,
        searchResultsArray: searchResults,
      };
    }
  }
  return state;
};

export default searchReducer;
