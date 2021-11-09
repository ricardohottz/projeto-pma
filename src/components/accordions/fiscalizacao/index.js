import AccordionPadrao from '../accordion'
import FindInPageIcon from '@material-ui/icons/FindInPage';
import { useState } from 'react';
import Mural from './mural'


export default function Fiscalizacao(){
    const icone = () => <FindInPageIcon style={{color:'#B2B2B2'}}/>
    const [disabled, setDisabled] = useState(false) 
    
   
    return(
        <AccordionPadrao title='Fiscalização' disabled={disabled} icone={icone}>
           
           <Mural/>
           
            
        </AccordionPadrao>
    )
}
