import AccordionPadrao from '../accordion'
import { useState } from 'react';
import MyLocationIcon from '@material-ui/icons/MyLocation';


export default function Enquadramento(){
    const icone = () => <MyLocationIcon style={{color:'#B2B2B2'}}/>
    const [disabled, setDisabled] = useState(false) 
    return(
        <AccordionPadrao title='Enquadramento' disabled={disabled} icone={icone}>
            <main>
                <div >
                    Enquadramento
                </div>
            </main>
        </AccordionPadrao>
    )
}