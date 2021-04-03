import Pokemon from '../models/pokemon'
import PokeDetails from './apiResponsePokeDetails'
import {APIResponse, APIResponseGeneric, FormatedDetails } from './interfaces'

export default class APIEndpoints {
    static readonly URI = 'https://pokeapi.co/api/v2/pokemon';
    async getPokemon(limit = 151): Promise<Pokemon[]> {
        const url_pokemon_list = `${APIEndpoints.URI}?limit=${limit}`;
        const pokemonList: APIResponse = await fetch(url_pokemon_list)
                                                .then(response => {
                                                  if (response.ok) {
                                                    return response.json();
                                                  } else {
                                                    throw new Error(`Something went wrong with the poke api`);
                                                  }
                                                })
                                                .catch(e => console.log('Connection error', e));
        const pokemen = pokemonList.results.map( async (i: APIResponseGeneric) => this.getPokemonDetails(i.name, i.url))
        return Promise.all(pokemen);
    }
    async getPokemonDetails(name: string, url: string ): Promise<Pokemon> {
      const url_pokemon_details = `${APIEndpoints.URI}/${name}`;
      const pokeDetails: PokeDetails = await fetch(url_pokemon_details)
                                      .then(response => {
                                        if (response.ok) {
                                          return response.json();
                                        } else {
                                          throw new Error(`Something went wrong with ${name}`);
                                        }
                                      })
                                      .catch(e => console.log('Connection error', e))
      return new Pokemon(name, url, this.formatDetails(pokeDetails), false )
    }
    formatDetails(details: PokeDetails): FormatedDetails {

      let secondary = details ? details.sprites.versions?.['generation-i']['yellow'].front_default : "";
      let types = details ? details.types.map(({type}) => type.name) : []
      let mainSprite = details ? details.sprites.front_default : "";

      return {
        types: types,
        sprites: {
          main: mainSprite,
          secondary: secondary ? secondary : ""
        }
      };
  }
}