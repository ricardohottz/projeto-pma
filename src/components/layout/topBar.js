import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Avatar, ListItemIcon } from '@material-ui/core';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';


const ufisa =[
    {ano:2010,valor:'R$100,00'},
    {ano:2020,valor:'R$200,00'},
    {ano:2030,valor:'R$300,00'},
    {ano:2040,valor:'R$400,00'},

]

const useStyles = makeStyles((theme) => ({
    root:{
       boxShadow: 'none',
       backgroundColor: '#0D6CB0',
       height:'170px',
       paddingLeft:'230px'

    },
    colunaCentral:{
        padding:'10px', 
        display:'flex',
        height:'150px',
        width:'600px'
    },
    colunaDireita:{
        padding:'10px', 
        display:'flex',
        flexDirection:'row',
        height:'150px',
        width:'400px'
    },
    colunaDireita_direita:{
        display:'flex',
        flexDirection:'column',
        color:'red',
        paddingLeft:'10px',
        width:'200px'
    },
    colunaDireita_esquerda:{
        display:'flex',
        width:'200px'
    },
    topo:{
        paddingTop:'10px', 
        display:'flex',
        flexDirection:'row'
    },
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
        right:'507px',
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
    caixaUsuario:{
        width:'100%',
        height:'70px',
        display:'flex',
        flexDirection:'row'
    },
    caixaUsuarioTexto:{
        display:'flex',
        flexDirection:'column',
        paddingLeft:'10px',
        color:'black'
    }
}))

export default function TopBar(){
    const styles = useStyles()

    return(
        <AppBar className={styles.root}>
            <div className={styles.topo}>
                <div className={styles.colunaCentral}>Olá</div>
                <div className={styles.colunaDireita}>
                    <div className={styles.colunaDireita_esquerda}>
                    <img src='/Gestão-Fiscal-e-Tributária 1.png' alt='carimbo'/>
                    </div>
                    <div className={styles.colunaDireita_direita}>
                        <div className={styles.caixaUsuario}>
                            <Avatar>
                                <AccountCircleOutlinedIcon/>
                            </Avatar>
                            <div className={styles.caixaUsuarioTexto}>
                                <div>Ricardo hottz</div>
                                <div>Minha conta</div>
                            </div>
                        </div>
                        <div className={styles.caixaUfisa}>
                               
                               <div > 
                                    <div className={styles.tituloUfisa}>UFISA 2010</div>

                                    <div className={styles.valorUfisa}>
                                        <div><img src='/mdi_cash-marker.png' alt='ufisa'/></div>
                                        <div className={styles.CaixaValorUfisa}>R$ 100,00</div>
                                </div>
                                <div className={styles.setaUfisa}>
                                    <div><img src='/seta-direita.png' alt='ufisa'/></div>
                                    <div><img src='/seta-esquerda.png' alt='ufisa'/></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppBar>
    )
}