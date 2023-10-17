import styled from "styled-components";

import { Colors, ScreenSizes } from "environment";

export const Company = styled.div`
  color: ${Colors.Primary};
  font-size: 1.1rem;

  @media screen {
    @media (min-width: ${ScreenSizes.MobileS}) {
    }
    @media (min-width: ${ScreenSizes.Tablet}) {
      font-size: 1.25rem;
    }
    @media (min-width: ${ScreenSizes.Laptop}) {
      font-size: 1.2rem;
    }
    @media (min-width: ${ScreenSizes.LaptopL}) {
      font-size: 1.3vw;
    }
  }
`;

interface ContentContainerProps {
  $isSelected: boolean;
}

export const Container = {
  Content: styled.div<ContentContainerProps>`
    background-color: white;
    border-radius: ${({ $isSelected }) => ($isSelected ? 0 : "0.5rem")} 0.5rem
      0.5rem ${({ $isSelected }) => ($isSelected ? 0 : "0.5rem")};
    box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.1);
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 1.1rem;
    padding: 1.8rem 1.5rem;
    position: relative;

    @media screen {
      @media (min-width: ${ScreenSizes.LaptopL}) {
        align-items: center;
        flex-direction: unset;
        gap: 1.6vw;
        padding: 2.35vw 2.7vw;
      }
    }
  `,
  IsFeatured: styled.div`
    background-color: ${Colors.Neutral800};
    border-radius: 1.25rem;
    color: white;
    padding: 0.25rem 0.7rem;

    @media screen {
      @media (min-width: ${ScreenSizes.Tablet}) {
        padding: 0.3rem 0.5rem;
      }
      @media (min-width: ${ScreenSizes.LaptopL}) {
        border-radius: 2rem;
        padding: 0.3vw 0.6vw;
      }
    }
  `,
  IsNew: styled.div`
    background-color: ${Colors.Primary};
    border-radius: 1.25rem;
    color: white;
    padding: 0.25rem 0.5rem;

    @media screen {
      @media (min-width: ${ScreenSizes.Tablet}) {
        padding: 0.3rem 0.5rem;
      }
      @media (min-width: ${ScreenSizes.LaptopL}) {
        border-radius: 2rem;
        padding: 0.3vw 0.6vw;
      }
    }
  `,
  IsNewIsFeatured: styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    font-size: 0.9rem;
    font-weight: 700;
    gap: 0.5rem;

    @media screen {
      @media (max-width: ${ScreenSizes.MobileXS}${ScreenSizes.MobileXS}) {
        font-size: 0.75rem;
      }
      @media (min-width: ${ScreenSizes.Laptop}) {
        font-size: 1rem;
      }
      @media (min-width: ${ScreenSizes.LaptopL}) {
        font-size: 1vw;
        gap: 0.5vw;
      }
    }
  `,
  JobDetails: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.1rem;

    @media screen {
      @media (min-width: ${ScreenSizes.LaptopL}) {
        flex: 1;
      }
      @media (min-width: ${ScreenSizes.LaptopL}) {
        gap: 0.75vw;
      }
    }
  `,
  Main: styled.li`
    display: flex;
  `,
  PostedAtContractLocation: styled.div`
    align-items: center;
    color: ${Colors.Neutral500};
    display: flex;
    flex-wrap: wrap;
    font-size: 1.1rem;
    gap: 0.5rem;

    @media screen {
      @media (max-width: ${ScreenSizes.MobileXS}) {
        font-size: 0.9rem;
      }
      @media (max-width: ${ScreenSizes.MobileS}) {
        font-size: 1rem;
      }
      @media (min-width: ${ScreenSizes.Tablet}) {
        gap: 0.7rem;
      }
      @media (min-width: ${ScreenSizes.LaptopL}) {
        font-size: 1.3vw;
        gap: 0.85vw;
      }
    }
  `,
  Selected: styled.div`
    background-color: ${Colors.Primary};
    clip-path: polygon(0% 2%, 100% 0%, 100% 100%, 0% 98%);
    width: 0.4rem;

    @media screen {
      @media (max-width: ${ScreenSizes.MobileXS}) {
        width: 0.3rem;
      }
      @media (min-width: ${ScreenSizes.LaptopL}) {
        width: 0.35vw;
      }
    }
  `,
  Tags: styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    @media screen {
      @media (min-width: ${ScreenSizes.LaptopL}) {
        gap: 1.25vw;
      }
    }
  `,
  Top: styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 1.6rem;
    margin-top: 1.25rem;

    @media screen {
      @media (max-width: ${ScreenSizes.MobileS}) {
        gap: 1rem;
      }
      @media (min-width: ${ScreenSizes.Tablet}) {
        margin-top: 2rem;
      }
      @media (min-width: ${ScreenSizes.LaptopL}) {
        margin-top: unset;
        gap: 1.5vw;
      }
    }
  `,
};

export const Divider = styled.div`
  background-color: ${Colors.Neutral300};
  height: 0.15rem;

  @media screen {
    @media (max-width: ${ScreenSizes.MobileS}) {
      height: 0.1rem;
    }
    @media (min-width: ${ScreenSizes.Laptop}) {
      height: 0.1rem;
    }
  }
`;

export const Photo = styled.img`
  height: 4rem;
  position: absolute;
  top: -2rem;
  width: 4rem;

  @media screen {
    @media (min-width: ${ScreenSizes.Tablet}) {
      height: 5rem;
      top: -2.65rem;
      width: 5rem;
    }
    @media (min-width: ${ScreenSizes.LaptopL}) {
      height: 6.7vw;
      position: unset;
      top: unset;
      width: 6.7vw;
    }
  }
`;

export const Position = styled.span`
  cursor: pointer;
  font-size: 1.1rem;
  width: fit-content;

  &:hover {
    color: ${Colors.Primary};
  }

  @media screen {
    @media (min-width: ${ScreenSizes.MobileXS}) {
      font-size: 1rem;
    }
    @media (min-width: ${ScreenSizes.Tablet}) {
      font-size: 1.25rem;
    }
    @media (min-width: ${ScreenSizes.Laptop}) {
      font-size: 1.2rem;
    }
    @media (min-width: ${ScreenSizes.LaptopL}) {
      font-size: 1.6vw;
    }
  }
`;

export const Tag = styled.div`
  background-color: ${Colors.Neutral200};
  border-radius: 0.25rem;
  color: ${Colors.Primary};
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 700;
  padding: 0.5rem;

  &:hover {
    background-color: ${Colors.Primary};
    color: white;
  }

  @media screen {
    @media (max-width: ${ScreenSizes.MobileXS}) {
      font-size: 0.75rem;
      padding: 0.4rem;
    }
    @media (max-width: ${ScreenSizes.MobileS}) {
      font-size: 1rem;
    }
    @media (min-width: ${ScreenSizes.Tablet}) {
      font-size: 1.1rem;
      padding: 0.6rem;
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
