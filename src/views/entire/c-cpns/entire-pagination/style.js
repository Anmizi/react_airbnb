import { styled } from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .MuiPaginationItem-page.Mui-selected {
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    &:hover {
      background-color: rgba(0, 0, 0, 1);
    }
  }
  .info {
    margin: 8px auto;
    text-align: center;
    color: #222;
  }
`;
