import styled from 'styled-components'

interface CategoryProps {
  color: string
}

export const CategoryTagContainer = styled.div<CategoryProps>`
  color: ${({ color }) => color };
  border: 1px solid ${({ color }) => color };
  border-radius: 10px;
  font-size: 15px;
  display: inline;
  padding: 2px 10px;
`