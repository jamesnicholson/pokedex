import {useEffect, useContext} from 'react';
import styled from 'styled-components';
import APIService from '../../api/apiDataService'
import AppContext from '../../store/context'
import Pokemon from '../../types/models/pokemon'
import {setPokemon, setLoading, setFavorties} from '../../store/actions'
import Tabs from '../Tabs'
import Card from '../Card'

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
  padding: 10px;
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
export const SearchBar = styled.input`
    width: 80%;
    font-size: 1em;
    padding: 11px;
    margin-left: 15px;
    margin-top: auto;
`;
const App = (): JSX.Element => {

  const {state, dispatch} = useContext(AppContext);
  
  /*useEffect(() => {
    console.log(state)
  },[state])*/

  useEffect(() => {
    const api = new APIService();
    api.loadPokemon().then(data => {
      dispatch(setPokemon(data))
      dispatch(setFavorties(data.filter((pokemon: Pokemon) => pokemon.isFavorite)))
      dispatch(setLoading(false))
    });
  },[dispatch]);

  return  <>
            <HeaderWrapper>
              <Title>Hello Pokédex</Title>
              <SearchBar type="text" placeholder="Search Pokédex" />
            </HeaderWrapper>
            <AppWrapper>
              <ListWrapper>
                <Tabs />
              </ListWrapper>
              <PokeListWrapper>{state.pokemon.map((pokemon:Pokemon, index:number) => <Card key={index} pokemon={pokemon}/>)}</PokeListWrapper>
            </AppWrapper>
          </> 
}
export default App;
