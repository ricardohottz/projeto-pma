import AccordionPadrao from '../accordion'
import dynamic from "next/dynamic";


export default function Enquadramento(){
    const MapWithNoSSR = dynamic(() => import("../../map"), {
        ssr: false
      })
    return(
        <AccordionPadrao title='Enquadramento'>
            <main>
                <div id="map">
                    <MapWithNoSSR />
                </div>
            </main>
        </AccordionPadrao>
    )
}