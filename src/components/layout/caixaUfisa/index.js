import style from '../../../styles/caixaUfisa.module.css'
import { Button } from '@material-ui/core'
import ClearIcon from '@material-ui/icons/Clear';

import {MyCarousel} from './ufisaRotativa'

const ufisa =[
    {ano:2010,valor:'R$100,00'},
    {ano:2020,valor:'R$200,00'},
    {ano:2030,valor:'R$300,00'},
    {ano:2040,valor:'R$400,00'},

]




export default function CaixaUfisa(){
    
    return(
        <div className={style.caixaUfisa}>
            <MyCarousel />
            <div className={style.usuario}> 
                <div className={style.usuarioAvatar}><img alt='usuario' src='/avatar.svg'/></div> 
                <div className={style.usuarioNome}> 
                    <div>Ricardo Hottz</div>
                    <div style={{fontSize:'11px', fontWeight:'bold'}}>Ver Perfil</div>
                </div>
            </div >
            <div className={style.annoucement}>
                <div className={style.annoucementIcones}>
                    <div style={{padding:'0px', marginTop:'3px'}}><img alt='recados' src='/iconeMail.svg'/></div>
                    <div style={{padding:'0px', marginTop:'1px' }}><img alt='recados' src='/iconeAnnouncement.svg'/></div>
                </div>
                <div style={{marginRight:'6px'}}>
                    <Button  size="small" color='info' startIcon={<ClearIcon />}>Sair</Button>
                </div>
            </div>          
                               
        </div>
    )
}