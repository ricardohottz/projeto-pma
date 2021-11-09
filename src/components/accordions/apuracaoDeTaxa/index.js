import AccordionPadrao from '../accordion'
import ListaTaxas from './listaTaxas'
import { useState } from 'react';
import TouchAppIcon from '@material-ui/icons/TouchApp';



export default function ApuracaoDeTaxa(){
    const icone = () => <TouchAppIcon style={{color:'#B2B2B2'}}/>
    const [disabled, setDisabled] = useState(true)
    
    return(
        <AccordionPadrao title='Apuração de Taxa' disabled={disabled} icone={icone}>
        
                <div >
                    <ListaTaxas/>
                </div>
            
        </AccordionPadrao>
    )
}