import React from "react";

const TestReact = () => {
  return (
    <div>
      <p
        onClick={() => {
          console.log("HELLO REACT!!");
        }}
      >
        {" "}
        TestReact
      </p>
    </div>
  );
};

export default TestReact;
