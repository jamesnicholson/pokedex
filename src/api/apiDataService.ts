import Pokemon from '../types/models/pokemon'
import APIEndpoints from '../api'
export default class APIDataService {
    static readonly MAX_POKEMON = 152;
    private pokemon: Pokemon[] = [];

    async loadPokemon(): Promise<Pokemon[]> {
       if(this.isCached()){
            this.loadFromCache();
        }else{
            this.pokemon = await this.getPokemonFromApi();
            this.saveToCache();
        }
        console.log(this.pokemon)
        return this.getPokemon;
    }
    
    get getPokemon(): Pokemon[] {
        return this.pokemon;
    }

    private async getPokemonFromApi(): Promise<Pokemon[]> {
        const api = new APIEndpoints();
        return api.getPokemon().then((pokemon: Pokemon[]) => pokemon);
    }
    private saveToCache(){
       this.pokemon.map((item: Pokemon) => this.updateCache(item))
    }
    private isCached(){
        return localStorage.length === 0 ? false : true;
    }
    updateCache(pokemon: Pokemon) {
        if(pokemon.id !== undefined) {
            localStorage.setItem(pokemon.id.toString(), pokemon.toJson());
        }
    }
    updateFavoriteCache(pokemon: Pokemon){
        if(pokemon.id !== undefined) {
            pokemon.toggleFavorite();
            localStorage.setItem(pokemon.id.toString(), pokemon.toJson());
        }
    }
    async loadFromCache() {
        let output = [];
        for (let i = 1; i < APIDataService.MAX_POKEMON; i++) {
          const json = localStorage.getItem(i.toString());
          if(json !== null) {
            output.push(Pokemon.fromJson(json))
          }
        }
        this.pokemon = output;
      }
}