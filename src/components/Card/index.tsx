import { FC, useContext } from 'react'
import styled from 'styled-components'
import Pokemon from '../../models/pokemon'
import {toggleFavorite} from '../../store/actions'
import AppContext from '../../store/context'
import APIService from '../../api/apiDataService'
import {useFindColor} from '../../hooks'

interface ICardProps {
    key:Number
    pokemon: Pokemon
}
interface colorProps {
    colors: Array<string>;
}
interface favProps {
    isfavorite?: boolean;
}
  
export const Name = styled.h3`
    padding: 10px;
    color: ${props => props.theme.colors.main};
    text-shadow: 0px 0px 1px ${props => props.theme.colors.secondary};
`;
export const Code = styled.div`
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
export const CardHeader = styled.div`
    width:100%;
    display:flex;
    justify-content: space-between;
`;
export const CardWrapper = styled.div`
    flex: 1 1 200px;
    background: khaki;
    text-align: center;
    margin:5px;
    background: ${(props: colorProps) => {
        if(props.colors.length === 1){
            return props.colors 
        } else if(props.colors.length > 1) {
            return `linear-gradient(${props.colors[0]}, ${props.colors[1]})`
        }
    }};
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
    const {spriteURL, displayName, displayCode, isFavorite, speciesType} = pokemon
    const colors = useFindColor(speciesType);
    const {dispatch} = useContext(AppContext);
    const handler = () => {
        dispatch(toggleFavorite(pokemon));
        const api = new APIService();
        api.updateFavoriteCache(pokemon);
    }
    return  <CardWrapper colors={colors}>
                <CardHeader>
                    <Code>{displayCode}</Code>
                    <Favorite
                        isfavorite={isFavorite}
                        onClick={()=>{handler()}}> {"\u2606"}</Favorite>
                </CardHeader>
                <Name>{displayName}</Name>
                <Sprite><img src={spriteURL} alt={displayName} /></Sprite>
            </CardWrapper>
}
export default Card