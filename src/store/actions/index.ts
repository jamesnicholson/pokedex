import Pokemon from '../../types/models/pokemon';
import {ISetLoading, ISetPokemon, IGetPokemon, IToggleFavorite, ISetFavorites } from '../../types/interfaces';
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
export type TAction = ISetLoading | ISetPokemon | IGetPokemon | IToggleFavorite | ISetFavorites;
  
export default TAction