import { useState, useRef, ReactNode, useEffect } from 'react'
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
export const pokemonType: { type: string, color: string }[] = [
    { "type": "normal", "color": "#A8A878" },
    { "type": "fire", "color": "#F08030" },
    { "type": "water", "color": "#6890F0" },
    { "type": "grass", "color": "#78C850" },
    { "type": "electric", "color": "#F8D030" },
    { "type": "ice", "color": "#98D8D8" },
    { "type": "fighting", "color": "#C03028" },
    { "type": "poison", "color": "#A040A0" },
    { "type": "ground", "color": "#E0C068" },
    { "type": "flying", "color": "#A890F0" },
    { "type": "psychic", "color": "#F85888" },
    { "type": "bug", "color": "#A8B820" },
    { "type": "rock", "color": "#B8A038" },
    { "type": "ghost", "color": "#705898" },
    { "type": "dark", "color": "#705848" },
    { "type": "dragon", "color": "#7038F8" },
    { "type": "steel", "color": "#B8B8D0" },
    { "type": "fairy", "color": "#EE99AC" },
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

export const useFilter = (pokemon: Array<Pokemon>, searchFilters: Array<string>): Array<Pokemon> => {
    const [value, setValue] = useState<Array<Pokemon>>(pokemon ? pokemon : []);
    useEffect(() => {
        if(searchFilters.length !== 0){
            var result = pokemon.filter(function(e) {
                return e.types.some(function(a:any) {
                    return searchFilters.indexOf(a.name) != -1
                })
            })
            setValue(result)
        }else{
            setValue(pokemon)
        }
    },[searchFilters, pokemon])
   return value
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
            return null;
        })
        return null;
    })
    return colors
}