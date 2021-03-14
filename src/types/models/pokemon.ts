export default class Pokemon {
    id?: number;
    name: string;
    url: string;
    constructor(name: string, url: string, id?: number){
        this.name = name;
        this.url = url;
        this.id = id;
        this.createID();
    }
    get displayName(): string {
        return this.name;
    }
    get spriteURL(): string {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`;
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
}