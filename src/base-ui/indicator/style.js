import { styled } from "styled-components";

export const IndicatorWrapper = styled.div`
  overflow: hidden;
  position: relative;
  .i-content {
    display: flex;
    position: relative;
    transition: transform 500ms ease;
    > * {
      flex-shrink: 0;
    }
  }
`;
