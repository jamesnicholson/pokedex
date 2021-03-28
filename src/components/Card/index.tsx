import { FC, useContext } from 'react'
import styled from 'styled-components'
import Pokemon from '../../types/models/pokemon'
import {addToFavorite} from '../../store/actions'
import AppContext from '../../store/context'
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
    padding: 8px;
    background: #ffc107;
    color: white;
    text-shadow: 1px 1px 0px #000;
    border-radius: 9px;
    font-size: 12px;
`;
export const Sprite = styled.div`
  padding: 10px;
`;
export const CardWrapper = styled.div`
    flex: 1 1 160px;
    background: khaki;
    text-align: center;
    margin:5px;
`;
export const Favorite = styled.span`
        padding: 8px;
        background: sandybrown;
        border-radius: 9px;
        font-size: 1em;
        color: white;
        font-weight: bold;
`;

const Card: FC<ICardProps> = ({pokemon}) => {
  const {spriteURL, displayName, displayCode} = pokemon
  const {state, dispatch} = useContext(AppContext);
    return  <CardWrapper>
                <Code>{displayCode}</Code>
                <Favorite onClick={()=>{dispatch(addToFavorite(displayName))}}> {"\u2606"}</Favorite>
                <Sprite><img src={spriteURL} alt={displayName} /></Sprite>
                <Name>{displayName}</Name>
            </CardWrapper>

}
export default Card