import React, { useState, useEffect } from "react";
import WhiskyCardReact from "./WhiskyCardReact.jsx";
import "./whiskyCard.scss";

const WhiskiesWrapperReact = (props) => {
  const whiskies = props.whiskies ? props.whiskies : [];

  const DISPLAY_NUMBER = 4;
  let postCount = 0;

  const [pageData, setPageDate] = useState({
    allWhiskies: whiskies,
    current: 0,
    display: [],
    loading: false,
    max: 0,
    isMore: false,
  });

  useEffect(() => {
    setPageDate((prevState) => {
      return {
        ...prevState,
        max: whiskies.length,
        current: DISPLAY_NUMBER,
        display: whiskies.slice(0, DISPLAY_NUMBER),
        isMore: whiskies?.length > DISPLAY_NUMBER,
      };
    });
  }, []);

  const getMore = () => {
    setPageDate((prevState) => {
      return {
        ...prevState,
        current: prevState.current + DISPLAY_NUMBER,
        display: prevState.allWhiskies.slice(
          0,
          prevState.current + DISPLAY_NUMBER,
        ),
        isMore: prevState.max > prevState.current + DISPLAY_NUMBER,
        loading: false,
      };
    });
  };

  const loadMoreHandler = () => {
    setPageDate((prevState) => {
      return {
        ...prevState,
        loading: true,
      };
    });

    setTimeout(() => {
      getMore();
    }, 2000);
  };

  return (
    <div className="whiskies">
      <div className="wrap-med">
        {pageData?.display?.map((whisky, index) => {
          return (
            <WhiskyCardReact
              key={index}
              whisky={whisky}
              baseSlug={props.baseSlug}
            />
          );
        })}
      </div>
      <div className="whiskies-load-more">
        <button
          onClick={() => loadMoreHandler()}
          type="button"
          disabled={!pageData.isMore}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default WhiskiesWrapperReact;
