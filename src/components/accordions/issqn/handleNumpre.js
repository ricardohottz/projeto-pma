import { Button } from '@material-ui/core'
import {useContext, useEffect} from 'react'
import { IssContext } from './context'
import Description from '@material-ui/icons/Description';



export default function HandleNumpre(){
    const{selectNumpre} = useContext(IssContext)
    const{getHabilitado} = useContext(IssContext)
    const {getDetailNumpre} = useContext(IssContext)
    
    
    
    if(getHabilitado()==='true'){
        return(<Button  startIcon={<Description/>} style={{padding:'20px', border:'3px solid #0989FF', color:'#0989FF'}} variant='outlined' onClick={getDetailNumpre}>Ver Detalhe</Button>)
    } else{
        return(<Button disabled startIcon={<Description/>} style={{padding:'20px', border:'3px solid '}} variant='outlined' >Ver Detalhe</Button>)
    }

}