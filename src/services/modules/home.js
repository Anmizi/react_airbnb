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
