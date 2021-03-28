import {useEffect, useContext} from 'react';
import styled from 'styled-components';
import APIService from '../../api/apiDataService'
import AppContext from '../../store/context'
import Pokemon from '../../types/models/pokemon'
import {savePokemon, setLoading} from '../../store/actions'
import Card from '../Card'
export const Title = styled.h1`
  padding: 10px;
  color: ${props => props.theme.colors.main};
  text-shadow: 0px 0px 2px ${props => props.theme.colors.secondary};
`;

const App = (): JSX.Element => { 
  const {state, dispatch} = useContext(AppContext);
  useEffect(() => {
    const api = new APIService();
    api.loadPokemon().then(data => {
      dispatch(savePokemon(data))
      dispatch(setLoading(false))
    });
  },[dispatch]);
  return <>
      <Title>Hello Pokedex</Title>
      {state.pokemon.map((pokemon:Pokemon, index:number) => <Card key={index} pokemon={pokemon}/>)}
      </>
}

export default App;
