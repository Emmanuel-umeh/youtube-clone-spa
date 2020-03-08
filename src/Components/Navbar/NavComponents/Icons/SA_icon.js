import React from "react";
import "./app_icon.scss";

// SVG COPIED FROM YOUTUBE

const SAIcon = React.memo(() => {
  return (
    <div className="icon_container">
      <svg className="icon_" viewBox="0 0 24 24" focusable={false}>
        <g>
          <path
            className="fill"
            fill="#909090"
            d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h12zm-3 5c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zm-9 8v1h12v-1c0-2-4-3.1-6-3.1S8 13 8 15z"
          ></path>
        </g>
      </svg>
    </div>
  );
});

export default SAIcon;
