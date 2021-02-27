import React from "react";

const buttons = ({ next, prev }) => {
  return (
    <div className="action">
      <div>
        <a onClick={prev}>Previous</a>
      </div>
      <div id="sep"></div>
      <div>
        <a onClick={next}>Next</a>
      </div>
    </div>
  );
};

export default buttons;
