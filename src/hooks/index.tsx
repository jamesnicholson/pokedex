import { useState, useRef, ReactNode } from 'react'
import styled from 'styled-components'
import Pokemon from '../types/models/pokemon';

const SearchBar = styled.input`
    width: 95%;
    font-size: 1em;
    padding: 11px;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: auto;
`
export const useInput = (): [string,ReactNode] => {
    const [value, setValue] = useState<string>("");
    const inputRef = useRef(null)
    const input:ReactNode = <SearchBar
                    value={value}
                    ref={inputRef}
                    onChange={e => setValue(e.target.value.toString())}
                    type="text"
                    placeholder="PokéSearch..."
                />;
    return [value, input];
};

export const useSearch = (searchTerm: string, pokemon: Array<Pokemon>): Array<Pokemon> => {
    const term = searchTerm.toLowerCase();
    const result =  pokemon.filter((obj) =>
        JSON.stringify(obj).toLowerCase().includes(term)
    )
   return result
};