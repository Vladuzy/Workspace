import styled from "styled-components";

interface Active {
  active: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  height: 527px;
`;

export const ImgContainer = styled.img<Active>`
  width: 30%;
  -webkit-filter: ${({ active }) => (active ? "default" : "grayscale(100%)")};
  filter: ${({ active }) => (active ? "default" : "grayscale(100%)")};
  filter: ${({ active }) => (active ? "default" : "gray")};
`;

export const Button = styled.button`
  width: 303px;
  height: 40px;
  background-color: var(--roxo-tema-principal);
  border-radius: 8px;
  border: none;
  color: var(--cinza-escuro);
  font-size: 16px;
`;
