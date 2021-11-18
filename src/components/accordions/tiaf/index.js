import AccordionPadrao from '../accordion'
import { useState } from 'react';
import PolicyIcon from '@material-ui/icons/Policy';
import InserirTiaf from './inserirTiaf';





export default function Tiaf(){
    const icone = () => <PolicyIcon style={{color:'#B2B2B2'}}/>
    const [disabled, setDisabled] = useState(false)
   
    
    return(
        <AccordionPadrao  title='TIAF' disabled={disabled} icone={icone}>
            <main>
                <div>Ricardo</div>
                <div>Ricardo</div>
                <div>Ricardo</div>
                <InserirTiaf/>
            </main>
        </AccordionPadrao>
    )
}