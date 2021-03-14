import Pokemon from '../types/models/pokemon'
import APIEndpoints from '../api'
export default class APIDataService {
    static readonly MAX_POKEMON_ID = 152;
    private pokemon: Pokemon[] = [];

    async load(): Promise<Pokemon[]> {
        this.pokemon = await this.loadFromAPI();
        return this.getPokemon;
    }
    
    get getPokemon(): Pokemon[] {
        return this.pokemon;
    }

    private async loadFromAPI(): Promise<Pokemon[]> {
        const api = new APIEndpoints();
        return api.getPokemon().then((pokemon: Pokemon[]) => pokemon);
    }
}