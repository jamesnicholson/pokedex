import IState from '../../types/interfaces';
import TActions from '../actions';
import {ActionType} from '../../types/enums'
import Pokemon from '../../types/models/pokemon';

function reducer(state: IState, action: TActions): IState{
    const {type, payload} = action
    switch(type){
        case ActionType.SET_POKEMON:
            return {...state, pokemon: payload}
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