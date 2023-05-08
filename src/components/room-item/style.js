import styled from "styled-components";

export const ItemWrapper = styled.li`
  width: 25%;
  box-sizing: border-box;
  padding: 8px;
  .inner {
    .cover {
      position: relative;
      box-sizing: border-box;
      padding: 66.66% 8px 0;
      border-radius: 3px;
      overflow: hidden;

      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .desc {
      margin: 10px 0 5px;
      font-size: 12px;
      font-weight: 700;
      color: ${(props) => props.verifycolor};
    }

    .name {
      font-size: 16px;
      font-weight: 700;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .price {
      margin: 8px 0;
    }
    .bottom {
      color: ${(props) => props.theme.textColor.primaryColor};
      .MuiRating-root,
      .MuiRating-decimal {
        margin-right: -2px;
      }
      .count {
        margin: 0 2px 0 4px;
      }
    }
  }
`;
