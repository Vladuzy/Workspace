import styled from "styled-components"

interface TabMobile{
    id: string,
    current:string,
    onClick?:()=>void,
}

export const ListContainer = styled.div`
  height: 80vh;
  
  background-color: var(--cinza-ultra-claro-main);
`
export const TabStyleMobile =styled.button<TabMobile>`
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border: none;
  width: 50vw;
  margin: 0;
  font-style: 17px;
  padding-bottom: 10px;
  background-color: ${({id, current})=>id===current ? "var(--cinza-ultra-claro-main)": "var(--branco-fundo-body)"};
  color:${({id, current})=>id===current ? "var(--preto-cafe)": "var(--cinza-claro)"};

`

export const Header= styled.div`
    border-bottom: 3px solid var(--cinza-claro);
    /* padding-bottom: 1rem; */
    margin-bottom: 5px;
    div{
        color:var(--roxo-tema-principal);
        font-weight: bold;
        font-size: 20px;
        margin: 5px 1rem;

    }
    span{
        font-size: 10px;
        margin-left: 1rem;
    }
`