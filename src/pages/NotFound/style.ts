import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  text-align: center;

  > img {
    margin-top: 20%;
    width: 250px;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 55%;
  position: absolute;
  bottom: 0;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  box-shadow: 0 20px 80px 10px #393739;
  background-color: #393739;
  color: #fef9f1;
  font-size: 25px;

  h2 {
    color: #7065e4;
    text-transform: uppercase;
    line-height: 1.4em;
    padding: 30px 0;
  }

  > div {
    height: 70%;
    padding: 0 50px;
  }
`;
