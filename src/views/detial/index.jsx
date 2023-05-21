import Indicator from "@/base-ui/indicator";
import React, { memo, useState } from "react";
import { DetailWrapper } from "./style";

const Detail = memo(() => {
  const list = ["aa", "bb", "cc", "dd", "ee", "gg", "ww", "ii", "oo"];
  const [selectIndex, setSelectIndex] = useState(0);
  const controlClickHandle = (isNext) => {
    let newIndex = selectIndex;
    if (isNext) {
      newIndex += 1;
    } else {
      newIndex -= 1;
    }
    if (newIndex < 0) {
      newIndex = list.length - 1;
    }
    if (newIndex > list.length - 1) {
      newIndex = 0;
    }
    setSelectIndex(newIndex);
  };
  return (
    <DetailWrapper>
      <div className="control">
        <button onClick={() => controlClickHandle(false)}>上一页</button>
        <button onClick={() => controlClickHandle(true)}>下一页</button>
      </div>
      <Indicator currentIndex={selectIndex}>
        {list.map((item) => {
          return <button key={item}>{item}</button>;
        })}
      </Indicator>
    </DetailWrapper>
  );
});

export default Detail;
