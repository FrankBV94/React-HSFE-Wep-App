import styled from "styled-components";

export const LayoutContainer = styled.div`
  @media only screen and (min-width: 1421px) {
    width: 100%;
  }
  @media only screen and (max-width: 1176px) {
    padding: 12px;
  }

  &::-webkit-scrollbar {
    width: 8px;
    left: 15px;
  }

  &::-webkit-scroll-thumb {
    background-color: #c9c9c9;
    border-radius: 16px;
  }
`;
