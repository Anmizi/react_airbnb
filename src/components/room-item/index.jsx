import PropTypes from "prop-types";
import React, { memo } from "react";
import { ItemWrapper } from "./style";
import { Rating } from "@mui/material";
const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%" } = props;
  console.log("props", props);
  return (
    <ItemWrapper
      verifycolor={itemData?.verify_info?.text_color || "#39576a"}
      itemwidth={itemWidth}
    >
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className="desc">{itemData.verify_info?.messages.join(" . ")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">￥{itemData.price}/晚</div>
        <div className="bottom">
          <Rating
            name="read-only"
            value={itemData.star_rating ?? 5}
            readOnly
            precision={0.5}
            sx={{
              fontSize: "12px",
              color: itemData.star_rating_color || "#00848a",
            }}
          />
          <span className="count">{itemData.reviews_count}</span>
          <span
            className="extra"
            style={{
              fontSize: itemData?.bottom_info?.font_size,
              color: itemData?.bottom_info?.content_color,
            }}
          >
            {itemData.bottom_info?.content}
          </span>
        </div>
      </div>
    </ItemWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object,
};

export default RoomItem;
