import Pokemon from '../../models/pokemon';
import {ISetLoading, ISetPokemon, IGetPokemon, IToggleFavorite, ISetFavorites, ISetSearchTerm, ISetSearchFilters, ISetFontLoaded } from './interfaces';
import {ActionType} from './enums'

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
export const setFontLoaded = (payload: boolean): ISetFontLoaded => ({
    type: ActionType.SET_FONT_LOADED,
    payload
});
type TAction = ISetLoading | ISetPokemon | IGetPokemon | IToggleFavorite | ISetFavorites | ISetSearchTerm | ISetFontLoaded | ISetSearchFilters;
export default TAction