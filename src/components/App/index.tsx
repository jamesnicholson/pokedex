import React, { useEffect } from 'react';
import styled from 'styled-components';
import APIService from '../../api/apiDataService'



export const Title = styled.h1`
  padding: 10px;
  color: ${props => props.theme.colors.main};
  text-shadow: 0px 0px 2px ${props => props.theme.colors.secondary};
`;


const App = (): JSX.Element => { 

  useEffect(() => {
    const api = new APIService();
    api.loadPokemon().then(data => console.log(data));
  
  },[]);
  
  return <Title>Hello...</Title>
}

export default App;
