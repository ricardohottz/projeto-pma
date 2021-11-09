import AccordionPadrao from '../accordion'
import { useState } from 'react'; 
import GavelIcon from '@material-ui/icons/Gavel';



export default function Autorizacao(){
    const icone = () => <GavelIcon style={{color:'#B2B2B2'}}/>
    const [disabled, setDisabled] = useState(false)    
    return(
        <AccordionPadrao title='Autorização' disabled={disabled} icone={icone}>
            <main>
                <div >
                    Autorizacao
                </div>
            </main>
        </AccordionPadrao> 
    )
}