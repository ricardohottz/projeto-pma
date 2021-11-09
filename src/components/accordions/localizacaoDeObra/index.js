import AccordionPadrao from '../accordion'
import { useState } from 'react';
import DomainDisabledIcon from '@material-ui/icons/DomainDisabled';



export default function LocalizacaoDeObra(){
    const icone = () => <DomainDisabledIcon style={{color:'#B2B2B2'}}/>
    const [disabled, setDisabled] = useState(false)
    
    return(
        <AccordionPadrao title='Localização de Obras'  disabled={disabled} icone={icone}>
            <main>
                <div >
                    Localizacao de Obras
                </div>
            </main>
        </AccordionPadrao>
    )
}