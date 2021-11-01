import {createContext, useState} from 'react'

export const IssContext = createContext({})

export const IssContextProvider = ({children}) => {
        const [numPre, setNumPre] = useState(0)
        var habilitado = 'false'
        // const {habilitado, setHabilitado} = useState('falso')

        const SelectNumpre = (params) => {
            
            setNumPre (params.id)
            console.log(numPre)
            getHabilitado(numPre)
            return numPre
        }


        const getHabilitado = () => {
            
            if(numPre != 0){
            habilitado ='true'
                
            }return habilitado
        }
         

    const getDetailNumpre = () => {
        console.log(
            numPre
        )
        }

    return(
        <IssContext.Provider value={{SelectNumpre, getDetailNumpre, getHabilitado}}>{children}</IssContext.Provider>
    )
} 