export default class Pokemon {
    id?: number;
    name: string;
    favorite: boolean = false
    url: string;
    types: any;

    constructor(name: string, url: string, types:any, favorite:boolean, id?: number){
        this.name = name;
        this.url = url;
        this.types = types;
        this.id = id;
        this.favorite = favorite
        this.createID();
    }
    get displayCode(): string | undefined{
        let num = this.id;
        return num?.toString().padStart(3, "0"); 
    }
    get displayName(): string {
        return this.name;
    }
    get spriteURL(): string {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`;
    }
    get speciesType(): string[] {
        return this.types.map((item:any) => item.name);
    }
    get isFavorite(): boolean | undefined {
      return this.favorite;
    }
    toggleFavorite() {
        this.favorite = !this.favorite
    }
    private createID() {
        if(this.id) {
          return;
        }
        const idRegex = /(?<=\/)(\d{1,3})/;
        const match = idRegex.exec(this.url);
        if(match !== null) {
          this.id = Number(match[0]);
        }
    }
    toJson(): string {
        return JSON.stringify(this);
    }
    static fromJson(json: string): Pokemon {
        const parsed = JSON.parse(json);
        return new Pokemon(parsed.name, parsed.url, parsed.types, parsed.favorite, parsed.id);
      
    }
}