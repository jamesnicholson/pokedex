import { FC, useContext } from 'react'
import styled from 'styled-components'
import { isConstructorDeclaration } from 'typescript';
import AppContext from '../../store/context'
import Pokemon from '../../models/pokemon';
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
    const {state} = useContext(AppContext);
    const {pokemon} = state;
    
    return  <NameListWrapper>
                {pokemon.map((_pokemon: Pokemon, index: number) => {
                    return  <div key={index}>
                                <Name>{_pokemon.displayName}</Name>
                                <img src={_pokemon.secondarySpriteURL} />
                            </div>
                })}
            </NameListWrapper>

}
export default NameList