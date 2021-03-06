import styled from "styled-components";

interface SectionContactProps {
  type: string;
}

export const Container = styled.main`
  height: 100vh;

  @media only screen and (min-width: 769px) {
    padding-top: 7vh;
  }
`;

export const StyleBody = styled.div`
  margin: auto 1rem;
`;

export const StyleMain = styled.main`
  h3 {
    color: var(--roxo-tema-principal);
  }
`;

export const StyledMoreInfo = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  span {
    display: block;
  }
  @media only screen and (min-width: 769px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

export const SectionExp = styled.section`
  margin: 10px auto;
  div {
    height: 100px;
    word-break: break-all;
    overflow: auto;
    margin-top: 8px;
  }

  @media only screen and (min-width: 769px) {
    & > div {
      overflow-y: scroll;
      max-height: 10vh;

      ::-webkit-scrollbar {
        width: 4px;
        height: 5px;
      }

      ::-webkit-scrollbar-track {
        background: var(--preto-cafe);
      }

      ::-webkit-scrollbar-thumb {
        border-radius: 30px;
        background: var(--roxo-tema-principal);
      }
    }
  }
`;

export const CategoriesContainer = styled.section`
  width: 100px;
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;

export const SectionCategories = styled.section`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SectionContact = styled.section<SectionContactProps>`
  width: ${({ type }) => (type === "employer" ? "100%" : "initial")};
  div {
    margin-top: 8px;
    display: ${({ type }) => (type === "employer" ? "flex" : "block")};
  }
  p:last-child {
    margin-left: 20px;
  }
`;

export const StyledNoInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 25vh;

  div {
    text-align: center;
    margin: 1rem auto;
    color: var(--cinza-claro);
  }
`;

export const JobsDone = styled.div`
  margin-top: 45px;

  .JobsDoneHeader {
    justify-content: space-between;
    h3 {
      color: var(--roxo-tema-principal);
    }
    button {
      right: 10px;
      font-size: 14px;
    }
  }

  div {
    color: var(--cinza-claro);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      margin-top: 1rem;
      width: 200px;
    }
  }

  @media only screen and (min-width: 769px) {
    margin-top: 0;
  }
`;

export const ListJobs = styled.ul`
  overflow-y: scroll;
  max-height: 30vh;

  ::-webkit-scrollbar {
    width: 4px;
    height: 5px;
  }

  ::-webkit-scrollbar-track {
    background: var(--preto-cafe);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 30px;
    background: var(--roxo-tema-principal);
  }
`;

export const MediaFooter = styled.div`
  @media only screen and (min-width: 769px) {
    display: none;
  }
`;
