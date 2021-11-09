import AccordionPadrao from '../accordion'
import { useState } from 'react';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';



export default function Tributario(){
    const icone = () => <MoneyOffIcon style={{color:'#B2B2B2'}}/>
    const [disabled, setDisabled] = useState(false)

   
    return(
        <AccordionPadrao title='Tributário' disabled={disabled} icone={icone}>
           tRIBUTARIO
         
        </AccordionPadrao>
    )
}
