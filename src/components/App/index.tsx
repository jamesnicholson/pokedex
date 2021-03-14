import React from 'react';
import styled from 'styled-components';

export const Title = styled.h1`
  padding: 10px;
  color: ${props => props.theme.colors.main};
  text-shadow: 0px 0px 2px ${props => props.theme.colors.secondary};
`;

const App: React.FC = () =>(<Title>Hello...</Title>);
export default App;
