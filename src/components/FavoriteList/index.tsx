import { FC, useContext } from 'react'
import styled from 'styled-components'
import AppContext from '../../store/context'
import Pokemon from '../../models/pokemon';

interface IFavoriteListProps {
} 
export const Name = styled.h4`
    padding: 10px;
    color: ${props => props.theme.colors.main};
    text-shadow: 0px 0px 1px ${props => props.theme.colors.secondary};
`;
export const FavoriteListWrapper = styled.div`
    background: #00bcd433;
    text-align: center;
    margin: 5px;
    width: auto;
    min-width: 130px;
`;
export const NameWrapper = styled.div`
    display:flex;
    background: #fff;
    justify-content: space-between;
    text-align: left;
    margin: 5px;
    width: 93%;
    min-width: 130px;
    padding: 3px;
    vertical-align: middle;
    box-shadow: 0px 0px 1px 1px #050708;
`;
const FavoriteList: FC<IFavoriteListProps> = () => {
    const {state} = useContext(AppContext);
    const {favorites} = state;
    if(favorites.length === 0){
        return <div>Your favorite Pokémon will appear here.</div> 
    }
    return  <FavoriteListWrapper>
                {favorites.map((_pokemon: Pokemon, index: number) => {
                    return  <NameWrapper key={index}>
                                <Name>{_pokemon.displayName}</Name>
                                <img src={_pokemon.secondarySpriteURL} />
                            </NameWrapper>
                })}
            </FavoriteListWrapper>

}
export default FavoriteList