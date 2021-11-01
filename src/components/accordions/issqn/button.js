import {Button} from '@material-ui/core'
import { useContext } from 'react'



export default function BT(){
    const{selectNumpre} = useContext(IssContext)
    const{getHabilitado} = useContext(IssContext)
    const {click} = useContext(IssContext)

    if(getHabilitado()==='true'){
        return(<Button variant='contained' onClick={click}>Clica mim</Button>)
    } else{
        return(<Button disabled  variant='contained' onClick={click}>Clica em mim</Button>)
    }
}