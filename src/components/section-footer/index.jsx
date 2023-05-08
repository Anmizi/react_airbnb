import IconMore from "@/assets/svg/icon_more";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { FooterWrapper } from "./style";

const SectionFooter = memo((props) => {
  const { name } = props;
  let showMessage = "显示全部";
  if (name) {
    showMessage = `显示更多${name}房源`;
  }
  return (
    <FooterWrapper color={name ? "#00848a" : "#000"}>
      <div className="info">
        <div className="text">{showMessage}</div>
        <div className="icon">
          <IconMore />
        </div>
      </div>
    </FooterWrapper>
  );
});

SectionFooter.propTypes = {
  name: PropTypes.string,
};

export default SectionFooter;
