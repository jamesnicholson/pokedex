import Pokemon from '../types/models/pokemon'
import {APIResponseItem, APIResponse} from '../types/interfaces'
export default class APIEndpoints {
    static readonly URI = 'https://pokeapi.co/api/v2/pokemon';
    async getPokemon(limit = 151): Promise<Pokemon[]> {
        const url = `${APIEndpoints.URI}?limit=${limit}`;
        const response = await fetch(url);
        const parsed: APIResponse = await response.json();
        const pokemon = parsed.results.map((i: APIResponseItem) => new Pokemon(i.name, i.url));
        return pokemon;
      }
}