import styled from "styled-components";

export const ContenerMain= styled.main`
    margin-left:300px ;
    h1{
        color: var(--roxo-tema-principal);
        margin-left: 1rem;
    }
`
export const ListsContainer=styled.div`
    display: flex;
    justify-content: space-around;
`
export const ColumnList =styled.div`
   h1{
       text-align: center;
       margin: 5px auto;
   } 
`

export const Page=styled.div`
    display: flex;

`
export const ProfileDesktop=styled.div`
    width: 25vw;
`
//

// interface TabProps {
//     id: string;
//     current: string;
//     onClick?: () => void;
//   }
  
  export const MainHomeContainer = styled.main``
  
  export const ListContainer = styled.div`
    min-height: 80vh;
  
    background-color: var(--cinza-ultra-claro-main);
  
    & > div:last-child {
      margin-bottom: 63px;
    }
  `;
  
//   export const TabStyle = styled.button<TabProps>`
//     border-top-left-radius: 30px;
//     border-top-right-radius: 30px;
//     border: none;
//     width: 49vw;
//     margin: 0;
//     font-style: 17px;
//     padding-bottom: 10px;
//     background-color: ${({ id, current }) =>
//       id === current
//         ? "var(--cinza-ultra-claro-main)"
//         : "var(--branco-fundo-body)"};
//     color: ${({ id, current }) =>
//       id === current ? "var(--preto-cafe)" : "var(--cinza-claro)"};
//   `;
  
//   export const Header = styled.div`
//     border-bottom: 3px solid var(--cinza-claro);
//     margin-bottom: 5px;
//     div {
//       color: var(--roxo-tema-principal);
//       font-weight: bold;
//       font-size: 20px;
//       margin: 5px 1rem;
//     }
//     span {
//       font-size: 10px;
//       margin-left: 1rem;
//     }
//   `;
  