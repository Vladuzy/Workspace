import styled from 'styled-components'

interface CardContainerProps {
  svg: string
  color: string
}

export const CardContainer = styled.div<CardContainerProps>`
  width: 30px;
  height: 30px;
  display: inline-block;
  border-radius: 8px;
  background-color: ${({ color }) => color};
  background-image: url(${({ svg }) => svg});
  background-position: center;
  background-size: 70%;
  background-repeat: no-repeat;
`