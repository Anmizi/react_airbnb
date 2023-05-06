import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  margin-right: 30px;
  color: ${(props) => props.theme.textColor.primaryColor};
  .btns {
    display: flex;
    align-items: center;
    margin-right: 10px;
    .login,
    .register,
    .language {
      margin-right: 10px;
      padding: 5px 12px;
      cursor: pointer;
      transform: 0.2s all;
      border-radius: 21px;
      &:hover {
        box-shadow: 0 0 2px ${(props) => props.theme.border.primaryColor};
        background-color: #f5f5f5;
      }
    }
  }
  .profile {
    cursor: pointer;
    display: flex;
    padding: 5px 5px 5px 12px;
    border-radius: 21px;
    border: 1px solid ${(props) => props.theme.border.primaryColor};
    align-items: center;
    .menu {
      margin-right: 10px;
    }
    ${(props) => props.theme.minxin.boxShadow}
  }
`;
