import Pokemon from '../models/pokemon'
import PokeDetails from './apiResponsePokeDetails'
import {APIResponse, APIResponseGeneric, FormatedDetails } from './interfaces'

export default class APIEndpoints {
    static readonly URI = 'https://pokeapi.co/api/v2/pokemon';
    async getPokemon(limit = 151): Promise<Pokemon[]> {
        const url_pokemon_list = `${APIEndpoints.URI}?limit=${limit}`;
        const pokemonList: APIResponse = await fetch(url_pokemon_list).then(response => response.json());
        const pokemen = pokemonList.results.map( async (i: APIResponseGeneric) => this.getPokemonDetails(i.name, i.url))
        return Promise.all(pokemen);
    }
    async getPokemonDetails(name: string, url: string ): Promise<Pokemon> {
      const url_pokemon_details = `${APIEndpoints.URI}/${name}`;
      const pokeDetails: PokeDetails = await fetch(url_pokemon_details).then(response => response.json());
      return new Pokemon(name, url, this.formatDetails(pokeDetails), false )
    }
    formatDetails(details: PokeDetails): FormatedDetails {
      let secondary = details.sprites.versions?.['generation-i']['yellow'].front_default 
      return {
        types: details.types.map(({type}) => type.name),
        sprites: {
          main: details.sprites.front_default,
          secondary: secondary ? secondary : ""
        }
      };
  }
}