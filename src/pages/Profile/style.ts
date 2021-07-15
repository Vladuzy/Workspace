import styled from "styled-components";

interface SectionContactProps {
  type: string;
}

export const Container = styled.main`
  height: 100vh;

  @media only screen and (min-width: 769px) {
    padding-top: 15vh;
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
`;
export const SectionExp = styled.section`
  margin: 10px auto;
  div {
    height: 100px;
    word-break: break-all;
    overflow: auto;
    margin-top: 8px;
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
  margin-bottom: 50px;

  div {
    text-align: center;
    margin: 1rem auto;
    color: var(--cinza-claro);
  }
`;

export const JobsDone = styled.div`
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
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      margin-top: 1rem;
      width: 200px;
    }
  }
`;
export const ListJobs = styled.ul`
  list-style: none;
`;

export const MediaFooter = styled.div`
  @media only screen and (min-width: 769px) {
    display: none;
  }
`;
