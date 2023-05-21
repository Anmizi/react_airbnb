import PropTypes from "prop-types";
import React, { memo, useRef, useState } from "react";
import { ItemWrapper } from "./style";
import { Rating } from "@mui/material";
import Slider from "react-slick";
import IconArrowLeft from "@/assets/svg/icon_arrow_left";
import IconArrowRight from "@/assets/svg/icon_arrow_right";
import Indicator from "@/base-ui/indicator";
import classNames from "classnames";
const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%" } = props;
  const [selectIdx, setSelectIdx] = useState(0);
  const sliderRef = useRef();

  const afterChange = (index) => {
    setSelectIdx(index);
  };
  const controlClickHandle = (e, isNext) => {
    e.stopPropagation();
    isNext ? sliderRef.current.slickNext() : sliderRef.current.slickPrev();
  };
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    afterChange,
  };
  const pictureElement = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  );
  const sliderElement = (
    <div className="swiper">
      <div className="control">
        <div className="btn left" onClick={(e) => controlClickHandle(e, false)}>
          <IconArrowLeft width={20} height={20} />
        </div>
        <div className="btn right" onClick={(e) => controlClickHandle(e, true)}>
          <IconArrowRight width={20} height={20} />
        </div>
      </div>
      <Slider {...settings} ref={sliderRef}>
        {itemData?.picture_urls?.map((item) => {
          return (
            <div className="cover" key={item}>
              <img src={item} alt="" />
            </div>
          );
        })}
      </Slider>
      <div className="indicator">
        <Indicator currentIndex={selectIdx}>
          {itemData?.picture_urls?.map((item, idx) => {
            return (
              <div className="dot_item" key={idx}>
                <div
                  className={classNames("dot", {
                    active: idx === selectIdx,
                  })}
                ></div>
              </div>
            );
          })}
        </Indicator>
      </div>
    </div>
  );
  return (
    <ItemWrapper
      verifycolor={itemData?.verify_info?.text_color || "#39576a"}
      itemwidth={itemWidth}
    >
      <div className="inner">
        {!itemData?.picture_urls ? pictureElement : sliderElement}
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
