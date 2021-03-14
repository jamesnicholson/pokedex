import IState, {IAction} from '../types/interfaces';

function reducer(state: IState, action: IAction): IState{
    switch(action.type){
        case 'SET_POKEMON':
            return action.payload
        default:
            return state
    }
}
export default reducer;