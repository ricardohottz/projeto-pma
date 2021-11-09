import AccordionPadrao from '../accordion'
import { useState } from 'react';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';



export default function PessoasAutorizadas(){
    const icone = () => <FolderSpecialIcon style={{color:'#B2B2B2'}}/>
    const [disabled, setDisabled] = useState(false)
    
    return(
        <AccordionPadrao title='Pessoas Autorizadas' disabled={disabled} icone={icone}>
            <main>
                <div >
                    Pessoas Autorizadas
                </div>
            </main>
        </AccordionPadrao>
    )
}