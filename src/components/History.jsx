import React from "react";
import { useSelector } from "react-redux";

const History = () => {
  const allSearchTerms = useSelector((state) => state.searchTerms);
  return (
    <div>
      {allSearchTerms?.map((searchTerm, index) => (
        <div key={index}>
          <ul>
            <li>
              Past Searches Numbered: {index + 1} {searchTerm}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default History;
