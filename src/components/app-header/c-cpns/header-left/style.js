import styled from "styled-components";

export const LeftWrapper = styled.div`
  flex: 1;
  .logo {
    display: inline-block;
    margin-left: 30px;
    color: ${(props) => props.theme.color.primaryColor};
  }
`;
