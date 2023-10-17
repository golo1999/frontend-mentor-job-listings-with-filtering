import styled from "styled-components";

import { Colors, ScreenSizes } from "environment";

interface InnerContainerProps {
  $isFilteringCardVisible: boolean;
}

export const Container = {
  Jobs: {
    Inner: styled.div<InnerContainerProps>`
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 4rem;
      margin: ${({ $isFilteringCardVisible }) =>
          $isFilteringCardVisible ? 0 : "4rem"}
        1.5rem 2rem 1.5rem;
      ${({ $isFilteringCardVisible }) =>
        $isFilteringCardVisible && "position: relative;"};
      ${({ $isFilteringCardVisible }) =>
        $isFilteringCardVisible && "top: -2.25rem;"};
      user-select: none;

      @media screen {
        @media (min-width: ${ScreenSizes.Tablet}) {
          margin: ${({ $isFilteringCardVisible }) =>
              $isFilteringCardVisible ? 0 : "4.5rem"}
            1.5vw 9vw 1.5vw;
          max-width: 75vw;
        }
        @media (min-width: ${ScreenSizes.LaptopL}) {
          gap: 3vw;
          ${({ $isFilteringCardVisible }) =>
            $isFilteringCardVisible && "top: -2.25vw;"};
        }
      }
    `,
    Outer: styled.div`
      background-color: ${Colors.Neutral100};
      display: flex;
      flex: 1;
      justify-content: center;
    `,
  },
};

export const Header = styled.img`
  background-color: ${Colors.Primary};
  width: 100%;
`;

export const JobsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3.25rem;
  list-style-type: none;

  @media screen {
    @media (min-width: ${ScreenSizes.Tablet}) {
      gap: 4rem;
    }
    @media (min-width: ${ScreenSizes.LaptopL}) {
      gap: 1.75vw;
    }
  }
`;
