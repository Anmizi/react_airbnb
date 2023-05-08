import { styled } from "styled-components";

export const FooterWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  .info {
    display: flex;
    align-items: center;
    cursor: pointer;
    .text {
      margin-right: 4px;
      color: ${(props) => props.color};
      font-weight: 700;
      font-size: 17px;
    }
    &:hover {
      text-decoration: underline;
    }
  }
`;
