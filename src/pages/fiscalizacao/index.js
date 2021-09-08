import Layout from "../../components/layout"
import {Button} from '@material-ui/core'
import Busca from '../../components/cadastro/busca'
import ControlledAccordions from "../../components/accordion"
import TopBar from "../../components/layout/topBar"
import ApuracaoDeTaxa from '../../components/accordions/apuracaoDeTaxa'
import AutoDeInfracao from '../../components/accordions/autoDeInfracao'
import Comunicacao from '../../components/accordions/comunicacao'
import Fiscalizacao from '../../components/accordions/fiscalizacao'
import Intimacao from '../../components/accordions/intimacao'
import Issqn from '../../components/accordions/issqn'
import Tiaf from '../../components/accordions/tiaf'
import LocalizacaoDeObra from '../../components/accordions/localizacaoDeObra'



export default function FiscalizacaoPage() {
  return (
    <Layout title = 'Sistema de consulta Fiscal - SEFAZ'>

        <>
        <TopBar tituloCabecalho ='Fiscalizacao' menu={{menu1:'Pessoas', menu2:'Empresas', menu3:'Eventuais', menu4:'Cálculos'}}/>
        <Busca/>
        <Fiscalizacao/>
        <Issqn/>
        <Tiaf/>
        <AutoDeInfracao/>
        <ApuracaoDeTaxa/>
        <Intimacao/>
        <LocalizacaoDeObra/>
        <Comunicacao/>
      
        <h2>Subtitulo</h2>
        <Button color='primary' variant='contained'>Clique aqui</Button>
        </>

    </Layout>
  )
}
