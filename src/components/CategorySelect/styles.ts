import styled from 'styled-components'

interface CategoryCOntainerProps {
  color: string
  margin: string
}

export const CategoryContainer = styled.section<CategoryCOntainerProps>`
  width: 290px;
  margin: 0 auto;

  h2 {
    font-size: 18px;
    font-weight: 400;
    color: ${({ color }) => color};
    margin: ${({ margin }) => margin} ;
  }
`

export const CardContainer = styled.div`
    
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`

export const LimitErrorSpan = styled.span`
  display: block;
  margin-left: 10px;
  color: var(--vermelho);
  font-size: 12px;
  width: 100%;
  height: 13px;
`