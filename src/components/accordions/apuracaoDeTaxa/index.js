import AccordionPadrao from '../accordion'
import ListaTaxas from './listaTaxas'



export default function ApuracaoDeTaxa(){
    
    return(
        <AccordionPadrao title='Apuração de Taxa'>
        
                <div >
                    <ListaTaxas/>
                </div>
            
        </AccordionPadrao>
    )
}