import PropTypes from "prop-types";
import React, { memo, useEffect, useRef } from "react";
import { IndicatorWrapper } from "./style";

const Indicator = memo((props) => {
  const { currentIndex, children } = props;
  const contentRef = useRef();
  useEffect(() => {
    const content = contentRef.current;
    const maxOffset = content.scrollWidth - content.clientWidth;
    const item = content.children[currentIndex];
    let distance =
      item.offsetLeft + item.clientWidth * 0.5 - content.clientWidth * 0.5;
    if (distance < 0) distance = 0;
    if (distance > maxOffset) distance = maxOffset;
    content.style.transform = `translate(${-distance}px)`;
  }, [currentIndex]);
  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {children}
      </div>
    </IndicatorWrapper>
  );
});

Indicator.propTypes = {
  currentIndex: PropTypes.number,
};

export default Indicator;
