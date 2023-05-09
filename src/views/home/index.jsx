import { fetchHomeDataAction } from "@/store/modules/home";
import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import HomeBanner from "./c-cpns/home-banner";
import HomeLongfor from "./c-cpns/home-longfor";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import HomeSectionV2 from "./c-cpns/home-section-v2";
import { HomeWrapper } from "./style";
const Home = memo(() => {
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    hotRecommendInfo,
    longforInfo,
  } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPrice,
      highScoreInfo: state.home.highScore,
      discountInfo: state.home.discount,
      hotRecommendInfo: state.home.hotRecommend,
      longforInfo: state.home.longfor,
    }),
    shallowEqual
  );

  // 派发事件，发送请求
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <HomeLongfor initData={longforInfo} />
        {Object.keys(discountInfo).length > 0 && (
          <HomeSectionV2 initData={discountInfo} />
        )}
        {Object.keys(hotRecommendInfo).length > 0 && (
          <HomeSectionV2 initData={hotRecommendInfo} />
        )}
        <HomeSectionV1 initData={goodPriceInfo} />
        <HomeSectionV1 initData={highScoreInfo} />
      </div>
    </HomeWrapper>
  );
});

export default Home;
