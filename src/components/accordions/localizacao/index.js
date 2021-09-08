import AccordionPadrao from '../accordion'
import dynamic from "next/dynamic";


export default function Localizacao(){
    const MapWithNoSSR = dynamic(() => import("../../map"), {
        ssr: false
      })
    return(
        <AccordionPadrao title='Localização'>
           
                <div id="map">
                    <MapWithNoSSR />
                </div>
            
        </AccordionPadrao>
    )
}
