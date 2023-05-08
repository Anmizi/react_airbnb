import classNames from "classnames";
import PropTypes from "prop-types";
import React, { memo, useState } from "react";

import { TabsWrapper } from "./style";
const SectionTabs = memo((props) => {
  const { tabsName, tabClick } = props;
  const [currentIdx, setCurrentIdx] = useState(0);
  const handleClickItem = (idx, name) => {
    setCurrentIdx(idx);
    tabClick(name);
  };
  return (
    <TabsWrapper>
      {tabsName?.map((name, idx) => {
        return (
          <div
            key={idx}
            className={classNames(["item", { active: currentIdx === idx }])}
            onClick={() => handleClickItem(idx, name)}
          >
            {name}
          </div>
        );
      })}
    </TabsWrapper>
  );
});

SectionTabs.propTypes = {
  tabsName: PropTypes.array,
};

export default SectionTabs;
