import React, { useState } from "react";
import WhiskyCardReact from "./WhiskyCardReact.jsx";

const WhiskiesWrapperReact = (props) => {
  const whiskies = props.whiskies ? props.whiskies : [];
  const [pageData, setPageDate] = useState({
    allWhiskies: whiskies,
  });

  console.log("pageData: ", pageData);

  return (
    <div className="whiskies">
      <div className="wrap-med">
        {props.whiskies?.map((whisky, index) => {
          return (
            <WhiskyCardReact
              key={index}
              whisky={whisky}
              baseSlug={props.baseSlug}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WhiskiesWrapperReact;
