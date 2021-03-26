import React, {useEffect, useContext} from 'react';
import styled from 'styled-components';
import APIService from '../../api/apiDataService'
import AppContext from '../../store/context'
import {ActionType} from '../../types/enums'

export const Title = styled.h1`
  padding: 10px;
  color: ${props => props.theme.colors.main};
  text-shadow: 0px 0px 2px ${props => props.theme.colors.secondary};
`;

const App = (): JSX.Element => { 
  const {dispatch} = useContext(AppContext);

  useEffect(() => {
    const api = new APIService();
    api.loadPokemon().then(data => {
      console.log(dispatch)
      dispatch({
        type: ActionType.SAVE_POKEMON,
        payload: data
      });
      dispatch({
        type: ActionType.SET_LOADING,
        payload: false
      });
    });
  },[dispatch]);
  
  return <Title>Hello Pokedex</Title>
}

export default App;
