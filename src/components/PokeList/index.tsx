import { FC, useContext } from 'react'
import styled from 'styled-components'
import AppContext from '../../store/context'
import {setSearchFilters} from '../../store/actions'
import {useSearch} from '../../hooks'
import Card from '../Card'
import Pokemon from '../../types/models/pokemon'
interface PokeListProps {
}
interface favProps {
    color?: string;
}

export const PokeListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    color: ${props => props.theme.colors.main};
`;

const PokeList: FC<PokeListProps> = () => {
    const {state, dispatch} = useContext(AppContext);
    const {searchTerm, pokemon, loading} =  state;
    const search = useSearch(searchTerm, pokemon);

    return  <PokeListWrapper>
               {search.map((pokemon:Pokemon, index:number) => <Card key={index} pokemon={pokemon}/>)}
            </PokeListWrapper>

}
export default PokeList