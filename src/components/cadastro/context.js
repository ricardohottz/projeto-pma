import { createContext, useState } from "react";
import { mask , unMask} from 'remask'

export const BuscaContext = createContext({})

export const BuscaContextProvider = ({children}) => {
      
        
   

    return (
        <BuscaContext.Provider>{children}</BuscaContext.Provider>
    )
}
   