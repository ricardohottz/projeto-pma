
import {makeStyles} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({

    titulo:{
        paddingLeft: '10px',
        marginTop:'20px',
        display: 'flex',
        textAlign:'top'
    },
    img: {
        paddingRight:'10px',
        
        
    },
    textoTitulo: {
        color:'white'
    },
    versao:{
        display:'flex',
        color:'#0D6CB0',
        justifyContent: 'flex-end',
        paddingRight:'5px',
        fontSize:'13px',
        height:'28px',
        paddingTop:'9px',
        marginBottom:'0px'


    }

}))

export default function TopMenuBar(){
    const styles = useStyles()
    return(
        <>
        <div className={styles.titulo}>
            <div className={styles.img}>
                
                <img alt='Teste'src='/logo_preto 1.png'/>

            </div>
            <div className={styles.textoTitulo}> 
                Plataforma Integrada de Consulta Interna
                <div style={{fontWeight:'bold', fontSize:'10px', padding:'0px', letterSpacing:'0.150rem'}}>P • L • A • I • C • I</div>
            </div>
        </div>
        <div className={styles.versao}>Versão Beta</div>
        </>
    )
}