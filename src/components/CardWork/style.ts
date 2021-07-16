import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-width: 100%;
  cursor: pointer;

  & > svg {
    margin-right: 10px;
    color: var(--roxo-tema-principal);
    width: 35px;
    height: 35px;
  }

  border-bottom: 1px solid var(--roxo-tema-principal);

  @media only screen and (min-width: 769px) {
    min-height: 125px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;

  h2 {
    font-size: 15px;
    margin: 0 5px;
  }

  svg {
    width: 55px;
    height: 55px;
  }

  & > div {
    height: 55px;
    margin-left: 10px;

    & > h2 {
      margin-bottom: 5px;
    }
  }
`;

export const CardFooter = styled.div`
  display: flex;
  color: var(--cinza-claro);
  font-size: 15px;

  div {
    margin: 10px 0 0 10px;
    display: flex;
    align-items: center;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  & div:nth-child(2) {
    margin-left: 10px;
  }
`;

export const ImageContainerHeader = styled.img`
  width: 55px;
  height: 55px;
`;

export const PContainer = styled.p`
  color: var(--roxo-tema-principal);
  height: 55px;
  width: 55px;
`;
