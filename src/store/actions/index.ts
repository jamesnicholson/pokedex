import Pokemon from '../../models/pokemon';
import {ISetLoading, ISetPokemon, IGetPokemon, IToggleFavorite, ISetFavorites, ISetSearchTerm, ISetSearchFilters } from './interfaces';
import {ActionType} from '../../types/enums'

export const setLoading = (payload:boolean): ISetLoading => ({
    type: ActionType.SET_LOADING,
    payload
});
export const setPokemon = (payload: Array<Pokemon>): ISetPokemon => ({
    type: ActionType.SET_POKEMON,
    payload
});
export const getPokemon = (payload: Array<Pokemon>): IGetPokemon => ({
    type: ActionType.GET_POKEMON,
    payload
});
export const setFavorties = (payload: Array<Pokemon>): ISetFavorites => ({
    type: ActionType.SET_FAVORITES,
    payload
});
export const toggleFavorite = (payload: Pokemon): IToggleFavorite => ({
    type: ActionType.TOGGLE_FAVORITE,
    payload
});
export const setSearchTerm = (payload: string): ISetSearchTerm => ({
    type: ActionType.SET_SEARCH_TERM,
    payload
});
export const setSearchFilters = (payload: string): ISetSearchFilters => ({
    type: ActionType.SET_SEARCH_FILTERS,
    payload
});
type TAction = ISetLoading | ISetPokemon | IGetPokemon | IToggleFavorite | ISetFavorites | ISetSearchTerm | ISetSearchFilters;
export default TAction