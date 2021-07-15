import styled from 'styled-components'

export const PageContainer = styled.main`
  display: flex;
  position: relative;
`

export const WorksMainContainer = styled.main`
  margin-left: 300px; 
  width: calc(100vw - 600px);
  height: 100vh;
`

export const WorksContentContainer = styled.section`
  width: 90%;
  margin: 80px auto 0 auto;

  & > h3 {
    font-family: 'Roboto';
    color: var(--roxo-tema-principal);
    font-size: 30px;
    font-weight: 400;
    margin-bottom: 25px;
  }
`