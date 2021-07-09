import { HeaderContainer, FilterContainer, IconContainer, MainContainer, Input } from './styles'
import { GoSettings } from 'react-icons/go'
import CardWork from '../../components/CardWork';

const Works = () => {
  return (
    <>
      <HeaderContainer>
        <FilterContainer>
          <Input />
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
