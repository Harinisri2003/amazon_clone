import { createContext,useReducer,useContext } from "react";

//prepare the datalayer
export const StateContext=createContext();

//wrap the app & procide the data layer
export const StateProvider = ({reducer, initialState, children}) =>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
     {children}
    </StateContext.Provider>
   )
//pull info from the data layer
export const useStateValue=()=>useContext(StateContext);