import { Button } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CancelIcon from '@material-ui/icons/Cancel';
import style from '../../../../styles/tiaf.module.css'
import AutocompleteComponent from './autocomplete';


export default function FormTiaf(){
    return(
        <div>
            <AutocompleteComponent/>
            
            
            

            <div className={style.conjuntoBotoes}>
            <Button startIcon={<ArrowBackIosIcon/>} style={{backgroundColor:'#404040', border:'4px solid #FF7A00', height:'52px', width:'140px', marginTop:'30px', color:'#FF7A00'}}>Voltar</Button>
            <Button endIcon={<ArrowForwardIosIcon/>} style={{backgroundColor:'#404040', border:'4px solid #FF7A00', height:'52px', width:'140px', marginTop:'30px', color:'#FF7A00'}}>Avançar</Button>
            </div>


            <div className={style.opacaoCarregada}>
                <div style={{color:'white', paddingLeft:'8px'}}>Aqui será exibido o sistema de resumo </div>
                <div style={{paddingTop:'6px', paddingRight:'6px', color:'red'}}><CancelIcon/></div>
            </div>


            <div className={style.opacaoCarregada}>
                <div style={{color:'white', paddingLeft:'8px'}}>Aqui será exibido o sistema de resumo </div>
                <div style={{paddingTop:'6px', paddingRight:'6px', color:'red'}}><CancelIcon/></div>
            </div>


            <div className={style.opacaoCarregada}>
                <div style={{color:'white', paddingLeft:'8px'}}>Aqui será exibido o sistema de resumo </div>
                <div style={{paddingTop:'6px', paddingRight:'6px', color:'red'}}><CancelIcon/></div>
            </div>


         </div>
    )
}