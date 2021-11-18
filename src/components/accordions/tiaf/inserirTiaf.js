import style from '../../../styles/tiaf.module.css'
import FormTiaf from './formulario'


export default function InserirTiaf(){
    return(
        <div className={style.main}>
            
            <div className={style.passoAPasso}>
                <div className={style.tituloPassoAPasso}>
                    <div className={style.img}><img alt='nova tiaf' src='/icone_pen_plus.svg'/></div>
                    <div className={style.texto}>Nova Tiaf</div>
                </div>

                <div className={style.passo}>
                    <div className={style.sequenciaHabilitadaNumero}>1</div>
                    <div className={style.sequenciaHabilitadaDetalhe}>Legislação empregada</div>
                </div>

                <div className={style.passo}>
                    <div className={style.sequenciaDesabilitadaNumero}>2</div>
                    <div className={style.sequenciaDesabilitadaDetalhe}>Legislação empregada</div>
                </div>

                <div className={style.passo}>
                    <div className={style.sequenciaDesabilitadaNumero}>3</div>
                    <div className={style.sequenciaDesabilitadaDetalhe}>Legislação empregada</div>
                </div>
                
                <div className={style.passo}>
                    <div className={style.sequenciaDesabilitadaNumero}>4</div>
                    <div className={style.sequenciaDesabilitadaDetalhe}>Legislação empregada</div>
                </div>


            </div>
            <div className={style.inserir}>
                
                <FormTiaf/>
               
            </div>
        </div>
    )
}