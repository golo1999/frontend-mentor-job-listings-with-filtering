import styled from "styled-components";

import { Colors, ScreenSizes } from "environment";

export const Container = {
  Main: styled.div`
    background-color: ${Colors.Neutral200};
    border-radius: 0.25rem;
    color: ${Colors.Primary};
    display: flex;
  `,
  RemoveIcon: styled.div`
    align-items: center;
    background-color: ${Colors.Primary};
    border-radius: 0 0.25rem 0.25rem 0;
    cursor: pointer;
    display: flex;
    justify-content: center;
    padding: 0.5rem;

    &:hover {
      background-color: ${Colors.Neutral800};
    }

    @media screen {
      @media (min-width: ${ScreenSizes.Laptop}) {
        padding: 0.75rem;
      }
      @media (min-width: ${ScreenSizes.LaptopL}) {
        padding: 0.6vw;
      }
    }
  `,
};

export const Name = styled.span`
  font-size: 1.1rem;
  padding: 0.5rem;

  @media screen {
    @media (max-width: ${ScreenSizes.MobileXS}) {
      font-size: 0.75rem;
      padding: 0.4rem;
    }
    @media (max-width: ${ScreenSizes.MobileS}) {
      font-size: 1rem;
    }
    @media (min-width: ${ScreenSizes.Laptop}) {
      font-size: 1rem;
      padding: 0.7rem;
    }
    @media (min-width: ${ScreenSizes.LaptopL}) {
      font-size: 1.1vw;
      padding: 0.6vw;
    }
  }
`;

export const RemoveIcon = styled.img`
  height: 1rem;
  width: 1rem;

  @media screen {
    @media (max-width: ${ScreenSizes.MobileXS}) {
      height: 0.75rem;
      width: 0.75rem;
    }
    @media (max-width: ${ScreenSizes.MobileS}) {
      height: 0.8rem;
      width: 0.8rem;
    }
    @media (min-width: ${ScreenSizes.Tablet}) {
      height: 1.1rem;
      width: 1.1rem;
    }
    @media (min-width: ${ScreenSizes.Laptop}) {
      height: 0.85rem;
      width: 0.85rem;
    }
    @media (min-width: ${ScreenSizes.LaptopL}) {
      height: 1vw;
      width: 1vw;
    }
  }
`;
