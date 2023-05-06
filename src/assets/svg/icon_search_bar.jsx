import React, { memo } from 'react'

const IconSearchBar = memo(() => {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: "block",
        fill: "none",
        height: 12,
        width: 12,
        stroke: "currentColor",
        strokeWidth: "5.333333333333333",
        overflow: "visible",
      }}
      aria-hidden="true"
      role="presentation"
      focusable="false"
    >
      <g fill="none">
        <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9" />
      </g>
    </svg>
  );
})

export default IconSearchBar