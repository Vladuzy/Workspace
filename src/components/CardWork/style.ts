import styled from "styled-components";

interface CategoryProps {
  color: string;
}

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  a {
    color: var(--roxo-tema-principal);
    font-weight: bold;

    svg {
      width: 35px;
      height: 35px;
    }
  }

  border-bottom: 1px solid var(--roxo-tema-principal);
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;

  h2 {
    font-size: 17px;
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
    margin: 10px 0;
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

export const Category = styled.div<CategoryProps>`
  color: ${({ color }) => color};
  border: 1px solid ${({ color }) => color};
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 15px;
  display: inline;
  padding: 2px 10px;
`;
