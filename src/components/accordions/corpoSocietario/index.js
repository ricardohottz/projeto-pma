import AccordionPadrao from '../accordion'
import { useState } from 'react'; 
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';


export default function CorpoSocietario(){
    const icone = () => <SupervisorAccountIcon style={{color:'#B2B2B2'}}/>
    const [disabled, setDisabled] = useState(false)   
   
    return(
        <AccordionPadrao title='Corpo Societário' disabled={disabled} icone={icone}>
           
           Corpo Societário
             
        </AccordionPadrao>
    )
}
