import IState from '../../types/interfaces';
import TActions from '../actions';
import {ActionType} from '../actions/enums'
import Pokemon from '../../models/pokemon';

function reducer(state: IState, action: TActions): IState{
    const {type, payload} = action
    switch(type){
        case ActionType.SET_POKEMON:
            return {...state, pokemon: payload}
        case ActionType.SET_SEARCH_TERM:
            return {...state, searchTerm: payload}
        case ActionType.SET_SEARCH_FILTERS:
            if(state.searchFilters.indexOf(payload) < 0){
                return {...state, searchFilters: [...state.searchFilters, payload]}
            }else{
                return {...state, searchFilters: state.searchFilters.filter((name: string) => name !== payload )}
            }  
        case ActionType.SET_LOADING:
            return {...state, loading: false}
        case ActionType.SET_FAVORITES:
            return {...state, favorites: payload}
        case ActionType.TOGGLE_FAVORITE:
            if(state.favorites.indexOf(payload) < 0){
                return {...state, favorites: [...state.favorites, payload]}
            }else{
                return {...state, favorites: state.favorites.filter((pokemon: Pokemon) => pokemon !== payload )}
            }         
        default:
            return state
    }
}
export default reducer;