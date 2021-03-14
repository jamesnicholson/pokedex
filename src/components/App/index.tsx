import React from 'react';
import styled from 'styled-components';
export const Title = styled.h1`
  padding: 10px;
  color: ${props => {
    console.log(props);
    return '#000'}};
`;

const App: React.FC = () =>(<Title>Hello...</Title>);
export default App;
