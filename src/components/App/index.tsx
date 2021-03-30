import {useEffect, useContext} from 'react';
import styled from 'styled-components';
import APIService from '../../api/apiDataService'
import AppContext from '../../store/context'
import Pokemon from '../../types/models/pokemon'
import {setPokemon, setLoading, setFavorties} from '../../store/actions'
import {useSearch} from '../../hooks'
import Tabs from '../Tabs'
import Card from '../Card'
import SpeciesTypeFilters from '../SpeciesTypeFilters'
import SearchBar from '../SearchBar'
import LoadingIndicator from '../LoadingIndicator'
export const Title = styled.h1`
  padding: 10px;
  color: ${props => props.theme.colors.main};
  text-shadow: 0px 0px 2px ${props => props.theme.colors.secondary};
`;
export const AppWrapper = styled.div`
  display: flex;
  padding: 10px;
  color: ${props => props.theme.colors.main};
`;
export const PokeListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: ${props => props.theme.colors.main};
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
`;

const App = (): JSX.Element => {

  const {state, dispatch} = useContext(AppContext);
  const {searchTerm, pokemon, loading} =  state
  const search = useSearch(searchTerm, pokemon);
  /*useEffect(() => {
    console.log(state)
  },[state])*/

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
              <Title>Hello Pokédex</Title>
              <SearchBar />
            </HeaderWrapper>
            <SpeciesTypeFilters />
            <AppWrapper>
              <ListWrapper>
                <Tabs />
              </ListWrapper>
              <PokeListWrapper>{search.map((pokemon:Pokemon, index:number) => <Card key={index} pokemon={pokemon}/>)}</PokeListWrapper>
            </AppWrapper>
          </> 
}
export default App;
