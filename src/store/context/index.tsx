
import { createContext, Dispatch } from 'react'
import IState from '../../types/interfaces';
import TAction from '../actions';

export const initialState: IState =  {
    pokemon: [],
    favorites:[],
    searchTerm: "",
    loading: true

}
interface IContext {
  state: IState;
  dispatch: Dispatch<TAction>;
}

const AppContext = createContext<IContext>({
    state: initialState,
    dispatch: () => null
  });
  
export default AppContext

