import styled from 'styled-components'

interface CategoryProps {
  category: string
}

export const CategoryTagContainer = styled.div<CategoryProps>`
  color: ${({ category }) => category === 'Limpeza' ? 'var(--vermelho)' : category === 'Pintura' ? 'var(--amarelo)' : category === 'Eletricista' ? 'var(--azul)' : category === 'Encanador' ? 'var(--roxo-categoria)' : 'var(--verde)' };
  border: 1px solid ${({ category }) => category === 'Limpeza' ? 'var(--vermelho)' : category === 'Pintura' ? 'var(--amarelo)' : category === 'Eletricista' ? 'var(--azul)' : category === 'Encanador' ? 'var(--roxo-categoria)' : 'var(--verde)' };
  border-radius: 10px;
  font-size: 15px;
  display: inline;
  padding: 2px 10px;
`