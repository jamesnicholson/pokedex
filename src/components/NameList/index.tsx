import { FC, useContext } from 'react'
import styled from 'styled-components'
import AppContext from '../../store/context'
import Pokemon from '../../types/models/pokemon';
interface INameListProps {

}
export const Name = styled.h4`
    padding: 10px;
    color: ${props => props.theme.colors.main};
    text-shadow: 0px 0px 1px ${props => props.theme.colors.secondary};
`;
export const NameListWrapper = styled.div`
    background: #00bcd433;
    text-align: center;
    margin: 5px;
    width: auto;
    min-width: 130px;
`;
const NameList: FC<INameListProps> = () => {
    const {state, dispatch} = useContext(AppContext);
    const {pokemon} = state;
    return  <NameListWrapper>
                {pokemon.map((pokemon: Pokemon, index: number) => <Name key={index}>{pokemon.displayName}</Name>) }
            </NameListWrapper>

}
export default NameList