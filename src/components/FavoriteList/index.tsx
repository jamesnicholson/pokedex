import { FC, useContext } from 'react'
import styled from 'styled-components'
import Pokemon from '../../types/models/pokemon'
import {addToFavorite} from '../../store/actions'
import AppContext from '../../store/context'
import APIService from '../../api/apiDataService'

interface IFavoriteListProps {
}
interface favProps {
    isfavorite?: boolean;
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


const FavoriteList: FC<IFavoriteListProps> = () => {
    const {state, dispatch} = useContext(AppContext);
    const {favorites} = state;
    return  <FavoriteListWrapper>
                {favorites.map((item: string, index: number) => <Name key={index}>{item}</Name>) }
            </FavoriteListWrapper>

}
export default FavoriteList