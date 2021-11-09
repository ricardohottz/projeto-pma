import AccordionPadrao from '../accordion'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

import { useState } from 'react'; 

export default function Fiscalizacao(){
    const icone = () => <AssignmentTurnedInIcon style={{color:'#B2B2B2'}}/>

    const [disabled, setDisabled] = useState(false)
    
    return(
        <AccordionPadrao title='Atividade' disabled={disabled} icone={icone}>
           
           Atividades
            
        </AccordionPadrao>
    )
}
