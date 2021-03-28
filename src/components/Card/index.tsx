import { FC } from 'react'
import styled from 'styled-components'
import Pokemon  from '../../types/models/pokemon'

interface ICardProps {
    key:Number
    pokemon: Pokemon
}
export const Name = styled.h3`
  padding: 10px;
  color: ${props => props.theme.colors.main};
  text-shadow: 0px 0px 1px ${props => props.theme.colors.secondary};
`;
export const Code = styled.span`
  padding: 10px;
`;
export const Sprite = styled.div`
  padding: 10px;
`;
export const CardWrapper = styled.div`
    flex: 1 1 160px;
`;
// 
const Card: FC<ICardProps> = ({pokemon}) => {
  const {spriteURL, displayName, displayCode} = pokemon
    return  <CardWrapper>
                <Code>{displayCode}</Code>
                <Sprite><img src={spriteURL} alt={displayName} /></Sprite>
                <Name>{displayName}</Name>
            </CardWrapper>

}
export default Card