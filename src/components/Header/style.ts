import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #ffffff;
  border-radius: 0px 0px 20px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  height: 94px;

  @media only screen and (min-width: 769px) {
    border-radius: 10px;
    max-width: 95%;
    margin: 0 auto;
  }
`;

export const TitleContainer = styled.h3`
  color: var(--roxo-tema-principal);
  margin-left: 3px;
`;

export const HandleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const ImgHandleContainer = styled.img`
  width: 24px;
  height: 24px;
`;

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 247px;
`;

export const HeaderInternContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 73px;
`;

export const ImgStarHeaderContainer = styled.img`
  width: 100px;
  height: 20px;
`;
