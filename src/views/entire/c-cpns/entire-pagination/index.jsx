import React, { memo } from "react";
import { PaginationWrapper } from "./style";
import { Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCurrentPageAction,
  fetchRoomListAction,
} from "@/store/modules/entire/actionsCreators";
const EntirePagination = memo(() => {
  const dispatch = useDispatch();
  const { totalCount, currentPage, roomList } = useSelector((state) => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
    roomList: state.entire.roomList,
  }));
  const startCount = (currentPage - 1) * 20 + 1;
  const endCount = startCount + 19;
  const handleChange = (e, val) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    dispatch(changeCurrentPageAction(val));
    dispatch(fetchRoomListAction());
  };
  return (
    <PaginationWrapper>
      {roomList.length > 0 && (
        <div className="pagination">
          <Pagination
            count={Math.ceil(totalCount / 20)}
            onChange={handleChange}
          />
          <div className="info">
            第 {startCount} - {endCount} 个房源,共超过 {totalCount} 多个
          </div>
        </div>
      )}
    </PaginationWrapper>
  );
});

export default EntirePagination;
