import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

import { Button } from '@material-ui/core';
import {Link} from '@material-ui/core'
import CaixaUfisa from './caixaUfisa';





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
        width:'760px',
      
    },
    colunaDireita:{
        padding:'10px', 
        display:'flex',
        flexDirection:'row',
        height:'150px',
        width:'350px'
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
        // width:'150px',
        // paddingLeft:'30px'
    },
    topo:{
        paddingTop:'10px', 
        display:'flex',
        flexDirection:'row'
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
        padding:'10px 15px',
        marginLeft: '20px'
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
        marginLeft:'260px',
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
                        <input style={{padding:'10px',borderRadius:'7px',width:'600px', border:'0px'}} type="text" placeholder="BUSCAR POR PALAVRA CHAVE"/>
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
                                        </div>
                    <div className={styles.colunaDireita_direita}>
                        
                        <CaixaUfisa/>
                    </div>
                </div>
            </div>
        </AppBar>
    )
}