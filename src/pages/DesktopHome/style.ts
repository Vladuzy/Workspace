import styled from "styled-components";

export const ContenerMain= styled.main`
    margin-left:300px ;
    margin-top: 50px;
    h1{
        color: var(--roxo-tema-principal);
        margin-left: 1rem;
        margin-bottom: 20px;
    }
`
export const ListsContainer=styled.div`
    display: flex;
    justify-content: space-around;
    width: 50vw;
`
export const ColumnList =styled.div`
  /* margin: auto 1rem; */
   h1{
      font-weight: normal;
      text-align: center;
      margin: 5px auto;
   } 
`

export const Page=styled.div`
    display: flex;

`
export const ProfileDesktop=styled.div`
    max-width: 25vw;
`
//

  
  export const ListContainer = styled.div`
    min-height: 80vh;
  
    background-color: var(--cinza-ultra-claro-main);
  
    & > div:last-child {
      margin-bottom: 63px;
    }
  `;
  