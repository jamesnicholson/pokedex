import { FC, useContext, useEffect } from 'react'
import styled from 'styled-components'
import AppContext from '../../store/context'
import {pokemonType} from '../../hooks'
interface SpeciesTypeFiltersProps {
}
interface favProps {
    color?: string;
}
export const SpeciesTypeFiltersWrapper = styled.div`
    width:100%;
    margin:5px;
    margin-left: 35px;
    margin-top: 25px;
`;
export const Text = styled.div`
    background: ${(props: favProps) => props.color};
    padding: 7px;
    display: inline-block;
    margin:2px;
`;


const SpeciesTypeFilters: FC<SpeciesTypeFiltersProps> = () => {
    const {dispatch} = useContext(AppContext);


    return  <SpeciesTypeFiltersWrapper>
                {pokemonType.map(({type, color}, index) =><Text key={index} color={color}>{type}</Text>)}
            </SpeciesTypeFiltersWrapper>

}
export default SpeciesTypeFilters