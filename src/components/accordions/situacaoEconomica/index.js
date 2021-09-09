import AccordionPadrao from '../accordion'

import GraficosISS from '../../charts/issqn'



export default function SituacaoEconomica(){
    
    return(
        <>
    
        <AccordionPadrao title='Situação Econômica'>
            
                
                    <GraficosISS/>
                
            
        </AccordionPadrao>
        </>
    )
}