import style from '../../../styles/fiscalizacao.module.css'
import PeriodoFiscalizado from './periodoFiscalizado'



export default function Mural(){
    return(
        <div className={style.tabela}>
            <div className={style.cabecalho}>
                <div className={style.titulosCabecalho}>
                    Período fiscalizado
                    
                </div>
                
            </div>
            <div style={{display:'flex', flexDirection: 'row', padding:'0'}}>
                <PeriodoFiscalizado/>
            </div>

        </div>
        
    )
}