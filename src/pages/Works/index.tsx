import {
  HeaderContainer,
  FilterContainer,
  IconContainer,
  MainContainer,
} from "./styles";
import Input from "../../components/Input";
import { GoSettings } from "react-icons/go";
import CardWork from "../../components/CardWork";

const Works = () => {
  return (
    <>
      <HeaderContainer>
        <FilterContainer>
          <Input
            width="235px"
            heigth="30px"
            color="var(--cinza-claro)"
            backColor="var(--cinza-escuro)"
            borderRadius="15px"
            border="none"
            fontSize="17px"
          />
          <IconContainer>
            <GoSettings />
          </IconContainer>
        </FilterContainer>
      </HeaderContainer>
      <MainContainer>
        <CardWork
          key="1"
          work={{
            nameWork: "Remoção de vespas",
            category: "Gerais",
            valorOferecido: "400,00",
            local: "Rua dos Mineiros",
          }}
        />
        {/* {Providers.map(elem => ({
          <CardWork work={elem} key={elem.id}/>
        }))} */}
      </MainContainer>
    </>
  );
};

export default Works;
