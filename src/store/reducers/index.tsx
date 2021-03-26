import IState from '../../types/interfaces';
import TActions from '../actions';
import Pokemon from '../../types/models/pokemon'
import {ActionType} from '../../types/enums'

const setLoading = (loading: boolean ):any => ({
    loading: loading
});
const setSavePokemon = (pokemon: Array<Pokemon>, state: IState):any => {
    console.log(state)
    console.log(pokemon)
    return state
};

function reducer(state: IState, action: TActions): IState{
    const {type, payload} = action

    switch(type){
        case ActionType.SAVE_POKEMON:
            console.log(state)
            console.log(action)
            return {...state}
        case ActionType.SET_LOADING:
            return { ...state, loading: true };
        default:
            return state
    }
}
export default reducer;