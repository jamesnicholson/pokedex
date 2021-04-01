import {Type} from '../api/apiResponsePokeDetails'

export interface APIResponse {
    count: number;
    next: string;
    previous: string;
    results: Array<APIResponseGeneric>;
}
export interface APIResponseGeneric {
    name: string;
    url: string;
}
export interface APIResponsePokemonTypes{
    slot: number;
    type: Array<APIResponseGeneric>;
}
export interface APIResponsePokemonSprites{
    front_default: string;
}
export interface FormatedDetails {
    types: Array<string>;
    sprites:{
        main:string;
        secondary:string
    }
}
export default APIResponse