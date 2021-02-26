import React from "react";
import { useSelector } from "react-redux";

const Results = () => {
  const resultsArray = useSelector((state) => state.searchResultsArray);
  //utilizing useSelector to access redux store and specify which state to select
  //In this case being the searchResultsArray key
  return (
    <div>
      {resultsArray?.map((individualResult, index) => (
        <div key={index}>
          <ul>
            <li>{individualResult.title}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Results;
