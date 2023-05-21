import RoomItem from "@/components/room-item";
import React, { memo } from "react";
import { useSelector } from "react-redux";
import { RoomsWrapper } from "./style";
const EntireRooms = memo(() => {
  const { roomList, totalCount, isLoading } = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    isLoading: state.entire.isLoading,
  }));
  return (
    <RoomsWrapper>
      <h1 className="title">{totalCount}多处住所</h1>
      <div className="list">
        {roomList?.map((item) => {
          return <RoomItem itemData={item} itemWidth="20%" key={item._id} />;
        })}
      </div>
      {isLoading && <div className="cover"></div>}
    </RoomsWrapper>
  );
});

export default EntireRooms;
