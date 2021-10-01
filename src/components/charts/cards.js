import SimpleCard from "./card"




export default function GraphicCards(){
    
    return(
        <div style={{marginLeft:'30px', marginTop:'30px', display:'flex', flexDirection:'row'}}>
            <SimpleCard/>
            <SimpleCard/>
            <SimpleCard/>
            <SimpleCard/>
        </div>
    )
}