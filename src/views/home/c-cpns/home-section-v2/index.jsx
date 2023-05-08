import PropTypes from "prop-types";
import React, { memo, useState, useCallback } from "react";
import { SectionV2Wrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionTabs from "@/components/section-tabs";
const HomeSectionV2 = memo((props) => {
  const { initData } = props;
  const tabsName = initData.dest_address?.map((item) => item.name);
  const initTabName = initData.dest_address?.[0].name;
  const [name, setName] = useState(initTabName);
  console.log(name);
  const handleTabClick = useCallback((name) => {
    setName(name);
  }, []);
  return (
    <SectionV2Wrapper>
      <SectionHeader title={initData.title} subtitle={initData.subtitle} />
      <SectionTabs tabsName={tabsName} tabClick={handleTabClick} />
      <SectionRooms roomList={initData?.dest_list?.[name]} itemWidth="33.33%" />
    </SectionV2Wrapper>
  );
});

HomeSectionV2.propTypes = {
  initData: PropTypes.object,
};

export default HomeSectionV2;
