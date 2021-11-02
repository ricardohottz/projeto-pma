import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Avatar, ListItemIcon } from '@material-ui/core';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { Button } from '@material-ui/core';
import {Link} from '@material-ui/core'



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
    
       position:'static'

    },
    colunaCentral:{
        padding:'10px', 
        display:'flex',
        flexDirection:'column',
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
        width:'200px',
        paddingLeft:'30px'
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
    },
    searchCampo:{
        marginLeft:'40px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'spaceBetween'
    },
    botao:{
        backgroundColor:'#0FF04E',
        marginLeft:'7px'
    },
    tituloSecao:{
        paddingTop:'15px',
        marginLeft:'40px',
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    tituloSecaoPrincipal:{
        fontSize:'36px',
        fontWeight:'bold',
        textShadow:'2px 2px #000111'
    },
    tituloSecaosecundario:{
        marginLeft:'100px',
        fontSize:'20px',
        fontWeight:'bold',
    },
    menuHorizontal:{
        paddingTop:'20px',
        paddingRight:'10px',
        paddingLeft:'20px',
        color:'white',
        cursor:'pointer'
    }
    
}))

export default function TopBar(props){
    const styles = useStyles()
    

    function montaMenuHorizontal(props){
        const menu = props.menu
        return(

            menu.map((item) => ( 
            <Link key= {item.id} className={styles.menuHorizontal} href={item.path}>{item.menu}</Link>)
            
            )
        )
    }
   
    return(
        <AppBar  positionRelative className={styles.root}>
            <div className={styles.topo}>
                <div className={styles.colunaCentral}>
                    <div className={styles.searchCampo}>
                        <input style={{padding:'10px',borderRadius:'7px',width:'470px', border:'0px'}} type="text" placeholder="BUSCAR POR PALAVRA CHAVE"/>
                        <Button className={styles.botao}>Buscar</Button>
                    </div>
                    <div className={styles.tituloSecao}>
                        <div className={styles.tituloSecaoPrincipal}>{props.tituloCabecalho}</div>
                        <div className={styles.tituloSecaosecundario}>{props.subtitulo}</div>
                    </div>
                    <div className={styles.menuHorizontal}>
                        {montaMenuHorizontal(props)}
                        
                    </div>
                </div>
                <div className={styles.colunaDireita}>
                    <div className={styles.colunaDireita_esquerda}>
                    <img src='/logo_sis.png' alt='carimbo'/>
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
                    </div>
                </div>
            </div>
        </AppBar>
    )
}