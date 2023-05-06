import styled from "styled-components";

export const CenterWrapper = styled.div`
  .search-bar {
    display: flex;
    align-items: center;
    border-radius: 21px;
    border: 1px solid #ddd;
    padding: 5px 10px;
    .text {
      width: 200px;
      color: ${(props) => props.theme.textColor.primaryColor};
      padding: 5px;
    }
    .icon {
      padding: 10px;
      background-color: ${(props) => props.theme.color.primaryColor};
      border-radius: 50%;
      color: #fff;
    }
  }
`;
