import * as React from "react";

const SearchSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="icon line"
    width={48}
    height={48}
    {...props}
  >
    <path
      d="M19 11a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm2 10-4.34-4.34"
      style={{
        fill: "none",
        stroke: "#313231",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1,
      }}
    />
  </svg>
);

export default SearchSvg;
