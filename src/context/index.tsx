
import React, { createContext, useReducer } from 'react'
import APIService from '../api';
import IState,{IAction} from '../types/interfaces';
import reducer from '../reducers'

export const initialState: IState =  {
    pokemon:[],
}

const AppContext = createContext<{
    state: IState;
    dispatch: React.Dispatch<any>;
  }>({
    state: initialState,
    dispatch: () => null
  });
  
const AppProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const api = new APIService();
    api.getPokemon().then(data => {
        console.log(data);
    })
    return (
      <AppContext.Provider value={{state, dispatch}}>
        {children}
      </AppContext.Provider>
    )
  }
  
export default AppProvider;

