import IState from '../../types/interfaces';
import TActions from '../actions';
import {ActionType} from '../../types/enums'

function reducer(state: IState, action: TActions): IState{
    const {type, payload} = action
    switch(type){
        case ActionType.SAVE_POKEMON:
            return {...state, pokemon: payload}
        case ActionType.SET_LOADING:
            return {...state, loading: false}
        default:
            return state
    }
}
export default reducer;