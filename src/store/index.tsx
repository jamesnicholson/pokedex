import React, {useReducer } from 'react'
import reducer from './reducers'
import AppContext, {initialState} from './context'

const AppProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <AppContext.Provider value={{state, dispatch}}>
        {children}
      </AppContext.Provider>
    )
  }
  export default AppProvider