import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
        list-style-type: none;
        text-decoration: none;
        border-style: none;
    }

    :root{
        //CORES PRINCIPAIS
        --branco-fundo-body: #F5F4F4;
        --roxo-tema-principal: #7065E4;
        --roxo-claro-tema-principal: rgba(112, 101, 228, 0.4);
        --preto-cafe: #31292E;
        --cinza-escuro: #ECEAEA;
        --cinza-claro: #A8A8A8;
        --cinza-ultra-claro-main: rgba(168, 168, 168, 0.2);
        --cinza-input-color: #E5E5E5;

        //CORES DAS CATEGORIAS
        --amarelo: #FABC05;
        --amarelo-claro: rgba(250, 188, 5, 0.2);
        --vermelho: #DA493E;
        --vermelho-claro: rgba(218, 73, 62, 0.2);
        --azul: #4766F2;
        --azul-claro: rgba(71, 102, 242, 0.2);
        --roxo-categoria: #5E1DEC;
        --roxo-categoria-claro: rgba(94, 29, 236, 0.2);
        --verde: #34A853;
        --verde-claro: rgba(52, 168, 83, 0.2);
    }

    body {
        font-family: 'Roboto Slab', serif;
        background: var(--branco-fundo-body);
        color: var(--preto-cafe)
    }

    body, input, button, select {
        font-family: 'Roboto Slab', serif;
        font-size: 1rem;
    }

    button {
        cursor: pointer
    }

    a {
        text-decoration: none
    }
`;
