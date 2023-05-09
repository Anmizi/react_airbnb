import httpRequest from "..";

export const getHomeGoodPriceData = () => {
  return httpRequest.get({
    url: "/home/goodprice",
  });
};

export const getHomeHighScoreData = () => {
  return httpRequest.get({
    url: "/home/highscore",
  });
};

export const getHomeDiscountData = () => {
  return httpRequest.get({
    url: "/home/discount",
  });
};

export const getHomeHotRecommendest = () => {
  return httpRequest.get({
    url: "/home/hotrecommenddest",
  });
};
export const getHomeLongForData = () => {
  return httpRequest.get({
    url: "/home/longfor",
  });
};