import Pokemon from '../../types/models/pokemon';
import {ISetLoading, ISavePokemon, IGetPokemon, IToggleFavorite} from '../../types/interfaces';
import {ActionType} from '../../types/enums'

export const setLoading = (payload:boolean): ISetLoading => ({
    type: ActionType.SET_LOADING,
    payload
});
export const savePokemon = (payload: Array<Pokemon>): ISavePokemon => ({
    type: ActionType.SAVE_POKEMON,
    payload
});
export const getPokemon = (payload: Array<Pokemon>): IGetPokemon => ({
    type: ActionType.GET_POKEMON,
    payload
});
export const toggleFavorite = (payload: string): IToggleFavorite => ({
    type: ActionType.TOGGLE_FAVORITE,
    payload
});
export type TAction = ISetLoading | ISavePokemon | IGetPokemon | IToggleFavorite;
  
export default TAction