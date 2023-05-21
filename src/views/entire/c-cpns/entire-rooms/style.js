import { styled } from "styled-components";

export const RoomsWrapper = styled.div`
  position: relative;
  margin: 40px 20px;
  .title {
    font-size: 20px;
    color: #222;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
  }
  > .cover {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.8);
  }
`;
