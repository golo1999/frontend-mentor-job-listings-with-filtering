import styled from "styled-components";

import { Colors, ScreenSizes } from "environment";

export const Clear = styled.span`
  color: ${Colors.Neutral500};
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 700;
  width: fit-content;

  &:hover {
    color: ${Colors.Primary};
    text-decoration: underline;
  }

  @media screen {
    @media (max-width: ${ScreenSizes.MobileS}) {
      font-size: 1rem;
    }
    @media (min-width: ${ScreenSizes.Tablet}) {
      font-size: 1rem;
    }
    @media (min-width: ${ScreenSizes.LaptopL}) {
      font-size: 1.15vw;
    }
  }
`;

export const Container = {
  FilteredItems: styled.div`
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    gap: 1rem;

    @media screen {
      @media (min-width: ${ScreenSizes.LaptopL}) {
        gap: 1.25vw;
      }
    }
  `,
  Main: styled.div`
    align-items: center;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.1);
    display: flex;
    gap: 1rem;
    padding: 1.25rem;

    @media screen {
      @media (max-width: ${ScreenSizes.MobileS}) {
        align-items: unset;
        flex-direction: column;
      }
      @media (min-width: ${ScreenSizes.LaptopL}) {
        padding: 1.45vw 2.8vw;
      }
    }
  `,
};
