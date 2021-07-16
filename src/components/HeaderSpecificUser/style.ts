import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #ffffff;
  border-radius: 0px 0px 20px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  height: 94px;
`;

export const TitleContainer = styled.h3`
  color: var(--roxo-tema-principal);
  margin-left: 3px;
`;
export const ImageHeader = styled.img`
  background-size: cover;
  width: 50px;
  height: 50px;
  margin-right: 5vw;
  margin-top: 20px;
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

export const ImageContainer = styled.img`
  width: 55px;
  height: 55px;
`;
