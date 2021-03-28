export default class Pokemon {
    id?: number;
    name: string;
    url: string;
    types: any;

    constructor(name: string, url: string, types:any, id?: number){
        this.name = name;
        this.url = url;
        this.types = types;
        this.id = id;
        this.createID();
    }
    get displayCode(): any{
        return this.id;
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
        return new Pokemon(parsed.name, parsed.url, parsed.id);
      
    }
}