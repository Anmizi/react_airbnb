import PropTypes from "prop-types";
import React, { memo } from "react";
import { HomeSectionWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
const HomeSectionV1 = memo((props) => {
  const { initData } = props;
  return (
    <HomeSectionWrapper>
      <SectionHeader title={initData.title} subtitle={initData.subtitle} />
      <SectionRooms roomList={initData?.list} />
    </HomeSectionWrapper>
  );
});

HomeSectionV1.propTypes = {
  initData: PropTypes.object,
};

export default HomeSectionV1;
