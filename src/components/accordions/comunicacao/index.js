import AccordionPadrao from '../accordion'
import { useState } from 'react'; 
import SmsIcon from '@material-ui/icons/Sms';

export default function Comunicacao(){
    const icone = () => <SmsIcon style={{color:'#B2B2B2'}}/>
    const [disabled, setDisabled] = useState(false)    
    return(
        <AccordionPadrao title='Comunicação' disabled={disabled} icone={icone}>
            <main>
                <div >
                    Comunicação
                </div>
            </main> 
        </AccordionPadrao>
    )
}