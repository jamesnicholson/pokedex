export default class Pokemon {
    name: String;
    constructor(name:String){
        this.name = name;
    }
    get getName(): String {
        return this.name;
    }
}