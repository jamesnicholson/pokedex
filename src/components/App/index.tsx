import {useEffect, useContext} from 'react';
import styled from 'styled-components';
import APIService from '../../api/apiDataService'
import AppContext from '../../store/context'
import Pokemon from '../../models/pokemon'
import {setPokemon, setLoading, setFavorties} from '../../store/actions'
import Tabs from '../Tabs'
import SpeciesTypeFilters from '../SpeciesTypeFilters'
import PokeList from '../PokeList'
import SearchBar from '../SearchBar'
import LoadingIndicator from '../LoadingIndicator'

export const Title = styled.h1`
  padding: 10px;
  color: ${props => props.theme.colors.main};
  text-shadow: 0px 0px 2px ${props => props.theme.colors.secondary};
`;
export const AppWrapper = styled.div`
  display: flex;
  padding: 0 10px;
  color: ${props => props.theme.colors.main};
`;
export const TitleWrapper = styled.div`
  width: 100%;
  max-width: 280px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  @media (max-width: 900px) {
    max-width: 100%;
    justify-content: space-between;
    align-content: normal;
    flex-direction: revert;
  }
`;
export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 230px;
  @media (max-width: 900px) {
    display:none;
  }
`;
export const HeaderWrapper = styled.div`
  display: flex;
  padding: 6px;
  color: ${props => props.theme.colors.main};
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
export const FilterSearchWrapper = styled.div`
  width:100%;
  color: ${props => props.theme.colors.main};
  @media (max-width: 900px) {
  }
`;
export const MenuToggleButton = styled.div`
  width:40px;
  height:40px;
  display:none;
  background:red;
  padding: 6px;
  color: ${props => props.theme.colors.main};
  @media (max-width: 900px) {
    display:block;
  }
`;


const App = (): JSX.Element => {

  const {state, dispatch} = useContext(AppContext);
  const {loading} = state

  useEffect(() => {
    const api = new APIService();
    api.loadPokemon().then(data => {
      dispatch(setPokemon(data))
      dispatch(setFavorties(data.filter((pokemon: Pokemon) => pokemon.isFavorite)))
    }).finally(() => dispatch(setLoading(false)));
  },[dispatch]);
  
  if(loading){
    return <LoadingIndicator />
  }
  return  <>
            <HeaderWrapper>
              <TitleWrapper>
                 <Title>Hello Pokédex</Title>
                 <MenuToggleButton>#</MenuToggleButton>
              </TitleWrapper>
              <FilterSearchWrapper>
                <SearchBar />
                <SpeciesTypeFilters />
              </FilterSearchWrapper>
            </HeaderWrapper>
            <AppWrapper>
              <ListWrapper>
                <Tabs />
              </ListWrapper>
              <PokeList />
            </AppWrapper>
          </> 
}
export default App;
