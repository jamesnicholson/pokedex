import { FC, useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import AppContext from '../../store/context'
import {useSearch, useFilter} from '../../hooks'
import Card from '../Card'
import Pokemon from '../../types/models/pokemon'

interface PokeListProps {
}

const PokeListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    color: ${props => props.theme.colors.main};
`;

const PokeList: FC<PokeListProps> = () => {
    const [pokemonList, setPokemonList] = useState<Array<Pokemon>>([])
    const {state} = useContext(AppContext);
    const {searchTerm, pokemon, searchFilters} =  state;
    const search = useSearch(searchTerm, pokemon);
    const filters = useFilter(pokemon, searchFilters);

    useEffect(() => { 
        setPokemonList(search)
    }, [searchTerm])
    useEffect(() => { 
        setPokemonList(filters) 
    }, [filters])

    return  <PokeListWrapper>
               {pokemonList.map((pokemon:Pokemon, index:number) => <Card key={index} pokemon={pokemon}/>)}
            </PokeListWrapper>

}
export default PokeList