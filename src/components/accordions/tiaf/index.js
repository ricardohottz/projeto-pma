import AccordionPadrao from '../accordion'
import { useState } from 'react';
import PolicyIcon from '@material-ui/icons/Policy';




export default function Tiaf(){
    const icone = () => <PolicyIcon style={{color:'#B2B2B2'}}/>
    const [disabled, setDisabled] = useState(false)
   
    
    return(
        <AccordionPadrao  title='TIAF' disabled={disabled} icone={icone}>
            <main>
                <div >
                    TIAF
                </div>
            </main>
        </AccordionPadrao>
    )
}