import AccordionPadrao from '../accordion'
import { useState } from 'react';
import SwapCallsIcon from '@material-ui/icons/SwapCalls';



export default function ProcessosEInteracoes(){
    const icone = () => <SwapCallsIcon style={{color:'#B2B2B2'}}/>
    const [disabled, setDisabled] = useState(false)
    
    return(
        <AccordionPadrao title='Processos e interações' disabled={disabled} icone={icone}>
            <main>
                <div >
                    Processos e Interações
                </div>
            </main>
        </AccordionPadrao>
    )
}