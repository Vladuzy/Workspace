import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  img{
    padding-left: 5vw;
  }
`;

export const Content = styled.div`
  width: 70vw;
  height: 100%;
  background-color: var(--roxo-categoria);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2, p{
    margin-bottom: 20px;
    color: white;
  }
`;
