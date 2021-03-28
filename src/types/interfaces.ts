import {ActionType} from './enums'
import Pokemon from './models/pokemon';

export default interface IState {
  pokemon: any;
  favorites: any
  loading: boolean
}

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

export interface APIResponsePokemonDetails {
  name: string;
  types: Array<APIResponsePokemonTypes>;
}

export interface APIResponsePokemonTypes{
  slot: number;
  type: Array<APIResponseGeneric>;
}



export interface IAction {
  type: ActionType;
  payload: any;
}
export interface ISetLoading {
  type: ActionType.SET_LOADING;
  payload: boolean
}
export interface ISavePokemon{
  type: ActionType.SAVE_POKEMON;
  payload: Array<Pokemon>;
}
export interface IGetPokemon {
  type: ActionType.GET_POKEMON;
  payload: Array<Pokemon>;
}
export interface IAddToFavorite {
  type: ActionType.ADD_TO_FAVORITE;
  payload: string;
}