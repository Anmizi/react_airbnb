import { getHomeGoodPriceData, getHomeHighScoreData } from "@/services";
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
  }
);
const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPrice: {},
    highScore: {},
  },
  reducers: {
    changeGoodPriceInfo(state, { payload }) {
      state.goodPrice = payload;
    },
    changeHighScoreInfo(state, { payload }) {
      state.highScore = payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchHomeDataAction.fulfilled, (state, action) => {
  //     state.goodPrice = action.payload;
  //   });
  // },
});
export const { changeGoodPriceInfo, changeHighScoreInfo } = homeSlice.actions;
export default homeSlice.reducer;
