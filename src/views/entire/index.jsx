import { fetchRoomListAction } from "@/store/modules/entire/actionsCreators";
import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import EntireFilter from "./c-cpns/entire-filter";
import EntirePagination from "./c-cpns/entire-pagination";
import EntireRooms from "./c-cpns/entire-rooms";
import { EntireWrapper } from "./style";

const Entire = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRoomListAction());
  });
  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  );
});

export default Entire;
