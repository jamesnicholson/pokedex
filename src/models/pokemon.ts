import { FormatedDetails } from "../api/interfaces";

export default class Pokemon {

    id?: number;
    name: string;
    favorite: boolean = false;
    url: string;
    details: FormatedDetails;

    constructor(name: string, url: string, details:FormatedDetails, favorite:boolean, id?: number){
        this.name = name;
        this.url = url;
        this.details = details;
        this.favorite = favorite;
        this.id = id;
        this.createID();
    }
    get displayCode(): string | undefined {
        let num = this.id;
        return num?.toString().padStart(3, "0"); 
    }
    get displayName(): string {
        return this.name;
    }
    get speciesType(): Array<string> {
        return this.details.types;
    }
    get spriteURL(): string {
        return this.details.sprites.main
    }
    get secondarySpriteURL(): string {
        return this.details.sprites.secondary
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
        return new Pokemon(parsed.name, parsed.url, parsed.details, parsed.favorite, parsed.id);    
    }
}