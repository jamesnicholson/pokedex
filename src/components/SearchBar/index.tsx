import { FC, useContext, useEffect } from 'react'
import styled from 'styled-components'
import AppContext from '../../store/context'
import {setSearchTerm} from '../../store/actions'
import { useInput } from '../../hooks'

interface ISearchBarProps {
}
export const SearchBarWrapper = styled.div`
    width:100%;
    margin:5px;
    margin-left: 35px;
    margin-top: 25px;
`;

const SearchBar: FC<ISearchBarProps> = () => {
    const [value, input] = useInput();
    const {dispatch} = useContext(AppContext);
    
    useEffect(() => {
        dispatch(setSearchTerm(value));
      },[value, dispatch]);

    return  <SearchBarWrapper>
                {input}
            </SearchBarWrapper>

}
export default SearchBar