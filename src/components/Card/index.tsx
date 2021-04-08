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
interface IColorProps {
    colors: Array<string>;
}
interface IFavoriteProps {
    isfavorite?: boolean;
    theme?:{
        pixels:{
            heart:string
            heartGrey:string
        }
    }
}

interface IAnimateProps {
    theme?:{
        animate:any
    }
}

export const Name = styled.h3`
    padding: 10px;
    color: #fff;
    font-size:15px;
`;
export const Code = styled.div`
    display:table;
    margin:8px 13px;
    padding: 4px;
    background: #ffc107;
    color: #000;
    font-weight: bold;
    text-shadow: 0.05em 0.05em 0px #fffdfd;
    box-shadow: 10px 0px 0px -4px #ffc107, 
                -10px 0px 0px -4px #ffc107,
                0px -2px 0px 0px #ffc107, 
                0px 2px 0px 0px #ffc107, 
                10px 0px 0px -4px #000,
                4px 0px 0px 2px #e2aa03,
                -4px 0px 0px 2px #e2aa03;
    font-size: 13px;

`;
export const Sprite = styled.div`
    padding: 10px;
    min-height: 96px;

`;
export const CardHeader = styled.div`
    width:100%;
    display:flex;
    justify-content: space-between;
    background:#000;
`;
export const CardWrapper = styled.div`
    flex: 1 1 200px;
    background: khaki;
    text-align: center;
    margin: 5px;
    box-shadow: inset 0px 0px 0px 5px #000;
    background: ${(props: IColorProps) => {
        if(props.colors.length === 1){
            return props.colors 
        } else if(props.colors.length > 1) {
            return `linear-gradient(${props.colors[0]}, ${props.colors[1]})`
        }
    }};
`;
const Heart = styled.div`
    width: 2px;
    height: 2px;
    background: none;
    position: relative;
    right: 6px;
    top: 0px;
    transition: all 0.3s ease-in-out;
    box-shadow: ${(props: IFavoriteProps) => props.isfavorite ? props.theme?.pixels.heart : props.theme?.pixels.heartGrey};
`;

const HeartWrapper = styled.div`
    width: 26px;
    height:26px;
    padding:5px;
    cursor: pointer;
    &:hover {
        ${Heart} {
            box-shadow: ${(props: IFavoriteProps) => props.isfavorite ? props.theme?.pixels.heartGrey : props.theme?.pixels.heart};
       },
       ${Sprite}{
        animation: ${(animateProps: IAnimateProps) => {return animateProps.theme?.animate}} 2.72s ease infinite;
       }
     }
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
                    <Name>{displayName}</Name>
                    <HeartWrapper
                        onClick={()=>{handler()}}><Heart isfavorite={isFavorite}>&nbsp;</Heart></HeartWrapper>
                </CardHeader>
                <Sprite><img src={spriteURL} alt={displayName} /></Sprite>
            </CardWrapper>
}
export default Card



