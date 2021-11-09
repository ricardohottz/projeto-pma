import AccordionPadrao from '../accordion'
import { useState } from 'react';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';





export default function SituacaoEconomica(){
    const icone = () => <TrendingUpIcon style={{color:'#B2B2B2'}}/>
    const [disabled, setDisabled] = useState(false)
    
    return(
        <>
    
        <AccordionPadrao title='Situação Econômica' disabled={disabled} icone={icone}>
            
                
                    Situação economica
                
            
        </AccordionPadrao>
        </>
    )
}