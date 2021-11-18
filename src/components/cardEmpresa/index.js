import style from '../../styles/cardEmpresa.module.css'
import GraficoRecolhimento from './graficoRecolhimento'

export default function CardEmpresa(){
    return(
        <div className={style.cardEmpresa}>
            <div className={style.card}>
                <div className={style.container}>
                    <div className={style.nomeEmpresa}>Figma do Brasil LTDA</div>
                    
                    <div className={style.cnpj}>CNPJ: 22.393.554/0001-09</div>
                    
                    <div className={style.informacao}>
                        <div className={style.inscricao}>Inscrição: 100100</div>
                        <div className={style.optante}>Optante pelo Simples Nacional</div>
                        
                    </div>
                    
                    
                </div>
                <div style={{textAlign:'right', fontSize:'12px', color:'#FF7A00', marginTop:'2px'}}>Todas as informações</div>
            </div>
            <div className={style.cardRecolhimento}> 
            <GraficoRecolhimento/>
            </div>
        </div>
        
    )
}