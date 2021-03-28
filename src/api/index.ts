import Pokemon from '../types/models/pokemon'
import {APIResponse, APIResponseGeneric, APIResponsePokemonDetails,APIResponsePokemonTypes } from '../types/interfaces'

export default class APIEndpoints {
    static readonly URI = 'https://pokeapi.co/api/v2/pokemon';
    async getPokemon(limit = 15): Promise<Pokemon[]> {
        const url_pokemon_list = `${APIEndpoints.URI}?limit=${limit}`;
        const parsedPokemonList: APIResponse = await fetch(url_pokemon_list).then(response => response.json());
        const pokemen = parsedPokemonList.results.map( async (i: APIResponseGeneric) => {
          const url = `${APIEndpoints.URI}/${i.name}`;
          const parsed_types: APIResponsePokemonDetails = await fetch(url).then(response => response.json());
          const types = parsed_types.types.map((data: APIResponsePokemonTypes) => data.type)
          return new Pokemon(i.name, i.url, types);
        })
        return Promise.all(pokemen);
  }
}