import ScrollView from "@/base-ui/scroll-view";
import RoomItem from "@/components/room-item";
import SectionHeader from "@/components/section-header";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionWrapper } from "./style";
const HomeSectionV3 = memo((props) => {
  const { initData } = props;
  return (
    <SectionWrapper>
      <SectionHeader title={initData.title} subtitle={initData.subtitle} />
      <ScrollView>
        {initData?.list?.map((item) => {
          return <RoomItem itemData={item} itemWidth="20%" key={item.id} />;
        })}
      </ScrollView>
    </SectionWrapper>
  );
});

HomeSectionV3.propTypes = {
  initData: PropTypes.object,
};

export default HomeSectionV3;
