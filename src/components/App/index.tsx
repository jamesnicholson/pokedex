import React, {useEffect, useContext} from 'react';
import styled from 'styled-components';
import APIService from '../../api/apiDataService'
import {AppContext} from '../../context'
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
      dispatch({
        type: ActionType.SET_LOADING,
        loading: true
      });
    });
  },[dispatch]);
  
  return <Title>Hello Pokedex</Title>
}

export default App;
