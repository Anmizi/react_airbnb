import React, { memo } from "react";

const IconArrowRight = memo((props) => {
  const { width = "10px", height = "10px" } = props;
  return (
    <svg
      viewBox="0 0 18 18"
      role="img"
      aria-hidden="false"
      aria-label="next"
      focusable="false"
      style={{ width, height, display: "block", fill: "currentcolor" }}
    >
      <path
        d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
        fillRule="evenodd"
      />
    </svg>
  );
});

export default IconArrowRight;
