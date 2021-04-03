import { FC, useContext } from 'react'
import styled from 'styled-components'
import AppContext from '../../store/context'
import Pokemon from '../../models/pokemon';
interface INameListProps {
}
const Name = styled.h4`
    padding: 10px;
    color: ${props => props.theme.colors.main};
    text-shadow: 0px 0px 1px ${props => props.theme.colors.secondary};
`;
const NameListWrapper = styled.div`
    background: #00bcd433;
    text-align: center;
    margin: 5px;
    width: auto;
    min-width: 130px;
`;
const NameWrapper = styled.div`
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
    @media (max-width: 900px) {
        width:98%;
    }
`;
const NameList: FC<INameListProps> = () => {
    const {state} = useContext(AppContext);
    const {pokemon} = state;
    
    return  <NameListWrapper>
                {pokemon.map((_pokemon: Pokemon, index: number) => {
                    return  <NameWrapper key={index}>
                                <Name>{_pokemon.displayName}</Name>
                                <img src={_pokemon.secondarySpriteURL} alt={_pokemon.displayName} />
                            </NameWrapper>
                })}
            </NameListWrapper>

}
export default NameList