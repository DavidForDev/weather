import * as React from "react";

const FavoriteSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="icon line"
    width={28}
    height={28}
    {...props}
  >
    <path
      d="M19.57 5.44a4.91 4.91 0 0 1 0 6.93L12 20l-7.57-7.63A4.91 4.91 0 0 1 7.87 4a4.9 4.9 0 0 1 3.44 1.44 4.46 4.46 0 0 1 .69.88 4.46 4.46 0 0 1 .69-.88 4.83 4.83 0 0 1 6.88 0Z"
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

export default FavoriteSvg;
