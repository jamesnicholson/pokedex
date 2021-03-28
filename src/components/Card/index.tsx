import { FC, useContext } from 'react'
import styled from 'styled-components'
import Pokemon from '../../types/models/pokemon'
import {toggleFavorite} from '../../store/actions'
import AppContext from '../../store/context'
import APIService from '../../api/apiDataService'

interface ICardProps {
    key:Number
    pokemon: Pokemon
}

interface favProps {
    isfavorite?: boolean;
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
export const Favorite = styled.div`
    padding: 8px;
    background: ${(props: favProps) => props.isfavorite ? "#8bc34a" : "rebeccapurple"};
    border-radius: 9px;
    font-size: 1em;
    color: white;
    font-weight: bold;
`;

const Card: FC<ICardProps> = ({pokemon}) => {
    const {spriteURL, displayName, displayCode, isFavorite} = pokemon
    const {dispatch} = useContext(AppContext);
    const handler = () => {
        dispatch(toggleFavorite(displayName));
        const api = new APIService();
        api.updateFavoriteCache(pokemon);
    }
    return  <CardWrapper>
                <Code>{displayCode}</Code>
                <Favorite
                    isfavorite={isFavorite}
                    onClick={()=>{handler()}}> {"\u2606"}</Favorite>
                <Sprite><img src={spriteURL} alt={displayName} /></Sprite>
                <Name>{displayName}</Name>
            </CardWrapper>

}
export default Card