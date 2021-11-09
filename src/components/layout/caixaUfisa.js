import { makeStyles } from "@material-ui/core"

const ufisa =[
    {ano:2010,valor:'R$100,00'},
    {ano:2020,valor:'R$200,00'},
    {ano:2030,valor:'R$300,00'},
    {ano:2040,valor:'R$400,00'},

]

const useStyles = makeStyles((theme) => ({
    caixaUfisa:{
        width:'139px',
        backgroundColor:'white',
        borderRadius:'7px',
        height:'47px',
        padding:'2px',
        display:'flex',
        flexDirection:'row'
        
    },
    valorUfisa:{
        display: 'flex',
        flexDirection:'row',
       
        height:'20px',
        width:'115px',
        paddingLeft:'4px'
       
    },
    setaUfisa: {
        position:'absolute',
        top:'92px',
        left:'1155px',
        alignItems:'right'
    },
    tituloUfisa:{
        textAlign:'center',
        width:'125px',
        fontWeight:'bold',
        color:'black',
        paddingTop:'2px'
    },
    CaixaValorUfisa:{
        fontWeight:'bolder',
        width:'100px',
        fontSize:'15px',
        textAlign:'center',
        alignItems:'center'
    },
}))


export default function CaixaUfisa(){
    const styles = useStyles()
    return(
        <div className={styles.caixaUfisa}>
                               
                               <div > 
                                    <div className={styles.tituloUfisa}>UFISA 2010</div>

                                    <div className={styles.valorUfisa}>
                                        <div><image src='/mdi_cash-marker.png' alt='ufisa'/></div>
                                        <div className={styles.CaixaValorUfisa}>R$ 100,00</div>
                                </div>
                                <div className={styles.setaUfisa}>
                                    {/* usar float action button */}
                                    <div><image src='/seta-direita.png' alt='ufisa'/></div>
                                    <div><image src='/seta-esquerda.png' alt='ufisa'/></div>
                                </div>

                            </div>
                        </div>
    )
}