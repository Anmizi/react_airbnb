import {
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeDiscountData,
  getHomeHotRecommendest,
  getHomeLongForData,
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
} = homeSlice.actions;
export default homeSlice.reducer;
