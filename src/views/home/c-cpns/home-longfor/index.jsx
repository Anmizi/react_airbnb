import ScrollView from "@/base-ui/scroll-view";
import LongForItem from "@/components/longfor-item";
import SectionHeader from "@/components/section-header";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { LongforWrapper } from "./style";

const HomeLongfor = memo((props) => {
  const { initData } = props;
  return (
    <LongforWrapper>
      <SectionHeader title={initData.title} subtitle={initData.subtitle} />
      <ScrollView>
        {initData.list?.map((item, idx) => {
          return <LongForItem itemData={item} key={idx} />;
        })}
      </ScrollView>
    </LongforWrapper>
  );
});

HomeLongfor.propTypes = {
  initData: PropTypes.object,
};

export default HomeLongfor;
