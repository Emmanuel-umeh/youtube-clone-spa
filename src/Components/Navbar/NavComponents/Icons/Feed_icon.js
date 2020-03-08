import React from "react";
import "./app_icon.scss";

// SVG COPIED FROM YOUTUBE

const FeedIcon = React.memo(() => {
  return (
    <div className="icon_container">
      <svg className="icon_" viewBox="0 0 24 24" focusable={false}>
        <g>
          <path
            className="fill"
            fill="#909090"
            d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"
          ></path>
          <path d="M0 0h24v24H0z" fill="none"></path>
        </g>
      </svg>
    </div>
  );
});

export default FeedIcon;
