import IconArrowLeft from "@/assets/svg/icon_arrow_left";
import IconArrowRight from "@/assets/svg/icon_arrow_right";
import React, { memo, useState, useEffect, useRef } from "react";
import { ScrollViewWrapper } from "./style";

const ScrollView = memo((props) => {
  const { children } = props;
  const [showRight, setShowRight] = useState(false);
  const [showLeft, setShowLeft] = useState(false);
  const [posIdx, setPosIdx] = useState(0);
  const contentRef = useRef();
  const distanceRef = useRef();
  useEffect(() => {
    const scrollWidth = contentRef.current.scrollWidth;
    const clientWidth = contentRef.current.clientWidth;
    const distance = scrollWidth - clientWidth;
    distanceRef.current = distance;
    distance > 0 && setShowRight(true);
  }, [children]);
  const handleControlScroll = (isRight) => {
    const newPosIdx = isRight ? posIdx + 1 : posIdx - 1;
    const offset = contentRef.current.children[newPosIdx].offsetLeft;
    contentRef.current.style.transform = `translateX(${-offset}px)`;
    setShowRight(distanceRef.current > offset);
    setShowLeft(offset > 0);
    setPosIdx(newPosIdx);
  };

  return (
    <ScrollViewWrapper>
      {showLeft && (
        <div className="left" onClick={() => handleControlScroll(false)}>
          <IconArrowLeft />
        </div>
      )}

      {showRight && (
        <div className="right" onClick={() => handleControlScroll(true)}>
          <IconArrowRight />
        </div>
      )}
      <div className="scroll">
        <div className="content" ref={contentRef}>
          {children}
        </div>
      </div>
    </ScrollViewWrapper>
  );
});

export default ScrollView;
