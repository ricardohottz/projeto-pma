import AccordionPadrao from '../accordion'
import { useState } from 'react';
import StorageIcon from '@material-ui/icons/Storage';


export default function InconsistenciaDeDados(){
    const icone = () => <StorageIcon style={{color:'#B2B2B2'}}/>
    const [disabled, setDisabled] = useState(false) 
    
    return(
        <AccordionPadrao title='Inconsistência de Dados' disabled={disabled} icone={icone}>
            <main>
                <div >
                    Inconsistencia de dados
                </div>
            </main>
        </AccordionPadrao>
    )
}