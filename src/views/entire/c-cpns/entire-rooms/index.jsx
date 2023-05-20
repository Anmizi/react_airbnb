import RoomItem from "@/components/room-item";
import React, { memo } from "react";
import { useSelector } from "react-redux";
import { RoomsWrapper } from "./style";
const EntireRooms = memo(() => {
  const { roomList, totalCount } = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
  }));
  return (
    <RoomsWrapper>
      <h1 className="title">{totalCount}多处住所</h1>
      <div className="list">
        {roomList?.map((item) => {
          return <RoomItem itemData={item} itemWidth="20%" key={item._id} />;
        })}
      </div>
    </RoomsWrapper>
  );
});

export default EntireRooms;
