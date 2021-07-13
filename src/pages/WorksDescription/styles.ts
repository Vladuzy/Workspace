import styled from "styled-components";

interface StatusWorksProps {
  completedWork?: boolean;
  activeWork?: boolean;
  applyRejected?: boolean;
}

export const HeaderContainer = styled.header`
  height: 13vh;
  position: relative;

  display: flex;
  align-items: center;

  svg:nth-child(1) {
    color: var(--roxo-tema-principal);
    position: absolute;
    width: 50px;
    height: 50px;
  }

  svg:nth-child(2) {
    margin: 0 auto;
    width: 60px;
    height: 60px;
  }
`;

export const MainContainer = styled.main`
  height: 87vh;
  background-color: var(--cinza-ultra-claro-main);
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;

  position: relative;

  button {
    position: absolute;
    bottom: 20px;
    right: 50%;
    transform: translateX(50%);
  }
`;

export const JobInfoContainer = styled.section`
  min-height: 80px;
  text-align: center;
  border-bottom: 1px solid var(--roxo-tema-principal);
  padding: 10px 0;

  h2 {
    font-size: 18px;
    width: 80%;
    margin: 0 auto;
    display: inline-block;
  }

  h3 {
    font-size: 11px;
    color: var(--roxo-tema-principal);
  }
`;

export const SpecialInfoContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 15px 0;

  svg {
    width: 18px;
    height: 18px;
    color: var(--roxo-tema-principal);
  }

  span {
    font-weight: bold;
    font-size: 12px;
    margin-left: 10px;
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const DescriptionInfoContainer = styled.section`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 10px auto 0 auto;

  h2 {
    font-size: 15px;
    font-weight: bolder;
    color: var(--roxo-tema-principal);
  }

  p {
    width: 100%;
    margin-top: 10px;
    font-size: 13px;
    color: var(--cinza-claro);
  }

  svg {
    width: 18px;
    height: 18px;
    color: var(--roxo-tema-principal);
  }

  span {
    font-weight: bold;
    font-size: 12px;
    margin-left: 10px;
  }

  & div:last-of-type {
    width: 100%;
    margin: 15px 0;
    display: flex;
  }
`;

export const ImageEdit = styled.img`
  width: 24px;
  display: inline-block;
`;

export const StatusWork = styled.div<StatusWorksProps>`
  background: ${({ completedWork, activeWork, applyRejected }) =>
    completedWork
      ? "var(--verde-claro)"
      : activeWork
      ? "var(--amarelo-claro)"
      : applyRejected
      ? "var(--vermelhor-claro)"
      : "var(--cinza-claro)"};

  color: ${({ completedWork, activeWork, applyRejected }) =>
    completedWork
      ? "var(--verde);"
      : activeWork
      ? "var(--amarelo)"
      : applyRejected
      ? "var(--vermelho)"
      : "var(--cinza-escuro)"};
  width: 100%;
  height: 40px;
  text-align: center;
  padding: 10px;
  font-size: 17px;
  font-weight: bolder;
  position: absolute;
  bottom: 20px;
`;

export const SpanCandidates = styled.div`
  color: var(--cinza-claro);
  width: 70%;
  text-align: center;
  margin: 30px auto;
`;
