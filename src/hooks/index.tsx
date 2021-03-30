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
export const pokemonType: { type: String, color: string }[] = [
    { "type": "Normal", "color": "#A8A878" },
    { "type": "Fire", "color": "#F08030" },
    { "type": "Water", "color": "#6890F0" },
    { "type": "Grass", "color": "#78C850" },
    { "type": "Electric", "color": "#F8D030" },
    { "type": "Ice", "color": "#98D8D8" },
    { "type": "Fighting", "color": "#C03028" },
    { "type": "Poison", "color": "#A040A0" },
    { "type": "Ground", "color": "#E0C068" },
    { "type": "Flying", "color": "#A890F0" },
    { "type": "Psychic", "color": "#F85888" },
    { "type": "Bug", "color": "#A8B820" },
    { "type": "Rock", "color": "#B8A038" },
    { "type": "Ghost", "color": "#705898" },
    { "type": "Dark", "color": "#705848" },
    { "type": "Dragon", "color": "#7038F8" },
    { "type": "Steel", "color": "#B8B8D0" },
    { "type": "Fairy", "color": "#EE99AC" },
];

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

export const useFindColor = (speciesType:Array<string>): Array<string> => {
    let colors: Array<string> = [];
     speciesType.map((species) => {
        pokemonType.find((item) => {
            if(species.toLowerCase() ===  item.type.toLowerCase()){
                colors.push(item.color)
            }
        })
    })
    return colors
}