import AccordionPadrao from '../accordion'
import dynamic from "next/dynamic";
import { useState } from 'react';
import RoomIcon from '@material-ui/icons/Room';


export default function Localizacao(){
    const MapWithNoSSR = dynamic(() => import("../../map"), {
        ssr: false
      })
    const icone = () => <RoomIcon style={{color:'#B2B2B2'}}/>
    const [disabled, setDisabled] = useState(false)
    return(
        <AccordionPadrao title='Localização' disabled={disabled} icone={icone}>
           
                <div id="map">
                    <MapWithNoSSR />
                </div>
            
        </AccordionPadrao>
    )
}
