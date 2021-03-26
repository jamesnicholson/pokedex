
import React, { createContext, useReducer } from 'react'
import IState from '../types/interfaces';
import reducer from '../reducers'

export const initialState: IState =  {
    favoritePokemon: [], 
    loading: true
}

export const AppContext = createContext<{
    state: IState;
    dispatch: React.Dispatch<any>;
  }>({
    state: initialState,
    dispatch: () => null
  });
  
const AppProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <AppContext.Provider value={{state, dispatch}}>
        {children}
      </AppContext.Provider>
    )
  }
  
export default AppProvider;

