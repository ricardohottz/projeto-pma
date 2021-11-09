import AccordionPadrao from '../accordion'
import CreateIcon from '@material-ui/icons/Create';

import { useState } from 'react'; 


export default function AutoDeInfracao(){
    const icone = () => <CreateIcon style={{color:'#B2B2B2'}}/>
    const [disabled, setDisabled] = useState(false)
    
    return(
        <AccordionPadrao title='Auto de Infração' disabled={disabled} icone={icone}>
            <main>
                <div >
                    Auto de infracao
                </div>
            </main>
        </AccordionPadrao>
    )
}