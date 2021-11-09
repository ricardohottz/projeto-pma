import style from '../styles/autenticacao.module.css'

export default function Autenticacao(){
    return(
            <div className={style.container}>
                <div className={style.box}>
                    <div className={style.esquerda}>
                        <div className={style.balaoBox}>
                            <div className={style.balaoLogo}>
                                <div className={style.balaoImagem}><img alt='Logo' src='/logo_sis.png'/></div>
                                <div className={style.balaoTexto}>Plataforma Integrada de Consulta Interna</div>
                            </div>
                            <div className={style.pontaBalao}/>
                            <div className={style.bola}/>
                        </div>
                       
                    <div className={style.input}>
                        <input  className={style.styleInput} type='text' placeholder='Digite seu nome '/>
                        <input  className={style.styleInput} type='text' placeholder='Digite a senha '/>
                        <button className={style.styleButton}>Entrar</button>
                        <span style={{color:'white', marginTop:'25px'}}>Esqueci minha senha</span>
                    </div>
                    </div>
                    <div className={style.direita}>
                        <div className={style.colaboradores}>
                            <div className={style.iconeColaboradores}><img alt='person' src='/akar-icons_person-check.png'/></div>
                            <div className={style.textoColaboradores}>
                                <div className={style.colaboradoresTitulo}>Colaboradores</div>
                                <div className={style.solicitarAcesso}>Solicitar acesso</div>
                            </div>
                            
                        </div>
                        <div className={style.balaoBox2}>
                            <div className={style.bola2}/>
                            <div className={style.pontaBalao2}/>
                            <div className={style.balaoPref}>
                                <div><img alt='' src='/logo_preto 1.png'/></div>
                                <div className={style.balaoTexto2}>Prefeitura de Araruama</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}