import Pokemon from '../models/pokemon'
import PokeDetails from './apiResponsePokeDetails'
import {APIResponse, APIResponseGeneric, FormatedDetails } from './interfaces'

export default class APIEndpoints {
    static readonly URI = 'https://pokeapi.co/api/v2/pokemon';
    async getPokemon(limit = 151): Promise<Pokemon[]> {
        const url_pokemon_list = `${APIEndpoints.URI}?limit=${limit}`;
        const parsedPokemonList: APIResponse = await fetch(url_pokemon_list).then(response => response.json());
        const pokemen = parsedPokemonList.results.map( async (i: APIResponseGeneric) => {
          const url_pokemon_details = `${APIEndpoints.URI}/${i.name}`;
          const details: PokeDetails = await fetch(url_pokemon_details).then(response => response.json());
         // const types = details.types.map((data: APIResponsePokemonTypes) => data.type)
          return new Pokemon(i.name, i.url, this.formatDetails(details), false);
        })
        return Promise.all(pokemen);
    }


    formatDetails(details: PokeDetails): FormatedDetails {
      let secondary = details.sprites.versions?.['generation-i']['red-blue'].front_default 
      return {
        types: details.types.map(({type}) => type.name),
        sprites: {
          main: details.sprites.front_default,
          secondary: secondary ? secondary : ""
        }
      };
  }
}