import AccordionPadrao from '../accordion'
import { useState } from 'react';
import DescriptionIcon from '@material-ui/icons/Description';



export default function Intimacao(){
    const icone = () => <DescriptionIcon style={{color:'#B2B2B2'}}/>
    const [disabled, setDisabled] = useState(false)
    
    return(
        <AccordionPadrao title='Intimação' disabled={disabled} icone={icone}>
            <main>
                <div >
                    Intimação
                </div>
            </main>
        </AccordionPadrao>
    )
}