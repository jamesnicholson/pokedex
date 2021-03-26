import IState, {IAction} from '../types/interfaces';
import Pokemon from '../types/models/pokemon'
import {ActionType} from '../types/enums'

const setLoading = (loading: boolean ):any => ({
    loading: loading
});
const setSavePokemon = (pokemon: Pokemon, state: IState):any => ({
    favoritePokemon: [pokemon]
});

function reducer(state: IState, action: IAction): IState{
    switch(action.type){
        case ActionType.SAVE_POKEMON:
            return setSavePokemon(action.payload, state)
        case ActionType.SET_LOADING:
            return setLoading(action.payload)
        default:
            return state
    }
}
export default reducer;