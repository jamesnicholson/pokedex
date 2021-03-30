import { FC, useContext } from 'react'
import styled from 'styled-components'
import AppContext from '../../store/context'
import {setSearchFilters} from '../../store/actions'
import {pokemonType} from '../../hooks'

interface SpeciesTypeFiltersProps {
}
interface favProps {
    color?: string;
    type?: string;
    searchFilter:any;
}
export const SpeciesTypeFiltersWrapper = styled.div`
    width:100%;
    margin:5px;
    margin-left: 35px;
    margin-top: 25px;
`;
export const Text = styled.div`
    background: ${(props: favProps) => props.color};
    border: ${(props: favProps) => props.searchFilter.includes(props.type) ? "1px solid black" : "none" };
    padding: 7px;
    display: inline-block;
    margin:2px;
`;

const SpeciesTypeFilters: FC<SpeciesTypeFiltersProps> = () => {
    const {state, dispatch} = useContext(AppContext);
    const {searchFilters} = state
    const handler = (name:string) => {
        dispatch(setSearchFilters(name))
    }
    return  <SpeciesTypeFiltersWrapper>
                {pokemonType.map(({type, color}, index) =>
                        <Text 
                            key={index}
                            onClick={()=> handler(type)}
                            color={color}
                            type={type}
                            searchFilter={searchFilters}
                            >
                                {type}
                        </Text>)}
            </SpeciesTypeFiltersWrapper>

}
export default SpeciesTypeFilters