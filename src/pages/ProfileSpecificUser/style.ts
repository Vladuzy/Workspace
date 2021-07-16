import styled from "styled-components";

interface SectionContactProps {
  type: string;
}

export const Container = styled.main`
  .loader,
  .loader:before,
  .loader:after {
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation: load7 1.8s infinite ease-in-out;
    animation: load7 1.8s infinite ease-in-out;
  }
  .loader {
    color: var(--roxo-tema-principal);
    font-size: 10px;
    margin: 0 auto;
    position: absolute;
    bottom: 50%;
    right: 50%;
    transform: translate(-50%, 50%);
    text-indent: -9999em;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
  .loader:before,
  .loader:after {
    content: "";
    position: absolute;
    top: 0;
  }
  .loader:before {
    left: -3.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  .loader:after {
    left: 3.5em;
  }
  @-webkit-keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
  @keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
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
`
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
  div {
    text-align: center;
    margin: 1rem auto 5px;
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
    width: 90vw;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      margin-top: 1rem;
      min-width: 200px;
    }
  }
`;
export const ListJobs = styled.ul`
  list-style: none;
`;

export const MediaFooter =styled.div`
  @media only screen and (min-width: 729px){
    display: none;
  }
`