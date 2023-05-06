import React, { memo } from 'react'

const IconMenu = memo(() => {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      style={{
        display: "block",
        fill: "none",
        height: 16,
        width: 16,
        stroke: "currentcolor",
        strokeWidth: 3,
        overflow: "visible",
      }}
    >
      <g fill="none" fillrule="nonzero">
        <path d="m2 16h28" />
        <path d="m2 24h28" />
        <path d="m2 8h28" />
      </g>
    </svg>
  );
})

export default IconMenu