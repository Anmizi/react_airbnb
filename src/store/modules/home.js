import {
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeDiscountData,
  getHomeHotRecommendest,
  getHomeLongForData,
  getHomePlusData,
} from "@/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchHomeDataAction = createAsyncThunk(
  "fetchdata",
  (payload, { dispatch }) => {
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPriceInfo(res));
    });
    getHomeHighScoreData().then((res) => {
      dispatch(changeHighScoreInfo(res));
    });
    getHomeDiscountData().then((res) => {
      dispatch(changeDiscountInfo(res));
    });
    getHomeHotRecommendest().then((res) => {
      dispatch(changeHotRecommendInfo(res));
    });
    getHomeLongForData().then((res) => {
      dispatch(changeLongForInfo(res));
    });
    getHomePlusData().then((res) => {
      dispatch(changPlusInfo(res));
    });
  }
);
const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPrice: {},
    highScore: {},
    discount: {},
    hotRecommend: {},
    longfor: {},
    plus: {},
  },
  reducers: {
    changeGoodPriceInfo(state, { payload }) {
      state.goodPrice = payload;
    },
    changeHighScoreInfo(state, { payload }) {
      state.highScore = payload;
    },
    changeDiscountInfo(state, { payload }) {
      state.discount = payload;
    },
    changeHotRecommendInfo(state, { payload }) {
      state.hotRecommend = payload;
    },
    changeLongForInfo(state, { payload }) {
      state.longfor = payload;
    },
    changPlusInfo(state, { payload }) {
      state.plus = payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchHomeDataAction.fulfilled, (state, action) => {
  //     state.goodPrice = action.payload;
  //   });
  // },
});
export const {
  changeGoodPriceInfo,
  changeHighScoreInfo,
  changeDiscountInfo,
  changeHotRecommendInfo,
  changeLongForInfo,
  changPlusInfo,
} = homeSlice.actions;
export default homeSlice.reducer;
