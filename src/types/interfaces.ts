import {ActionType} from './enums'
import Pokemon from './models/pokemon';

export default interface IState {
  pokemon: any;
  favorites: any;
  searchTerm: any;
  searchFilters: any;
  loading: boolean;
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
export interface ISetPokemon{
  type: ActionType.SET_POKEMON;
  payload: Array<Pokemon>;
}
export interface IGetPokemon {
  type: ActionType.GET_POKEMON;
  payload: Array<Pokemon>;
}
export interface IToggleFavorite {
  type: ActionType.TOGGLE_FAVORITE;
  payload: Pokemon;
}
export interface ISetFavorites{
  type: ActionType.SET_FAVORITES;
  payload: Array<Pokemon>;
}
export interface ISetSearchTerm{
  type: ActionType.SET_SEARCH_TERM;
  payload: string;
}
export interface ISetSearchFilters{
  type: ActionType.SET_SEARCH_FILTERS;
  payload: Array<string> | string;
}