import { getEntireRoomList } from "@/services/modules/entire";
import actionTypes from "./constants";
import store from "@/store";
export const changeCurrentPageAction = (currentPage) => {
  return {
    type: actionTypes.CHANGE_CURRENT_PAGE,
    currentPage,
  };
};
export const changeRoomListAction = (roomList) => {
  return {
    type: actionTypes.CHANGE_ROOM_LIST,
    roomList,
  };
};
export const changeIsLoading = (isLoading) => {
  return {
    type: actionTypes.CHANGE_IS_LOADING,
    isLoading,
  };
};
export const fetchRoomListAction = () => {
  return (dispatch) => {
    const currentPage = store.getState().entire.currentPage;
    dispatch(changeIsLoading(true));
    getEntireRoomList((currentPage - 1) * 20).then((res) => {
      dispatch(changeRoomListAction(res.list));
      dispatch(changeTotalCountAction(res.totalCount));
      dispatch(changeIsLoading(false));
    });
  };
};
export const changeTotalCountAction = (totalCount) => {
  return {
    type: actionTypes.CHANGE_TOTAL_COUNT,
    totalCount,
  };
};
