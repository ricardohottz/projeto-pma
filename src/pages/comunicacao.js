import Layout from "../components/layout"
import {Button} from '@material-ui/core'
import Busca from '../components/cadastro/busca'
import Atividade from '../components/accordions/atividade'
import TopBar from "../components/layout/topBar"
import AutoDeInfracao from "../components/accordions/autoDeInfracao"
import Autorizacao from "../components/accordions/autorizacao"
import CorpoSocietario from "../components/accordions/corpoSocietario"
import Comunicacao from "../components/accordions/comunicacao"
import Enquadramento from "../components/accordions/enquadramento"
import Fiscalizacao from "../components/accordions/fiscalizacao"
import InconsistenciaDeDados from "../components/accordions/inconcistenciaDados"
import Intimacao from "../components/accordions/intimacao"
import Issqn from "../components/accordions/issqn"
import Localizacao from "../components/accordions/localizacao"
import LocalizacaoDeObra from "../components/accordions/localizacaoDeObra"
import PessoasAutorizadas from "../components/accordions/pessoasAutorizadas"
import ProcessosEInteracoes from "../components/accordions/processosInteracoes"
import SituacaoEconomica from "../components/accordions/situacaoEconomica"
import Tiaf from "../components/accordions/tiaf"
import Tributario from "../components/accordions/tributario"
import ApuracaoDeTaxa from "../components/accordions/apuracaoDeTaxa"


export default function ComunicacaoPage() {
  const menu = [
    {id:'11',menu:'Interna', path:'/dashboard/tributario'}, 
    {id:'12',menu:'Externa', path:'/dashboard/estrategico'}
  ]
  return (
    <Layout title = 'Sistema de consulta Fiscal - SEFAZ'>

        <>
        <TopBar tituloCabecalho='Comunicação' menu={menu}/>
        <Busca/>
        <Atividade/>
        <AutoDeInfracao/>
        <Autorizacao/>
        <CorpoSocietario/>
        <Comunicacao/>
        <Enquadramento/>
        <Fiscalizacao/>
        <InconsistenciaDeDados/>
        <Intimacao/>
        <Issqn/>
        <Localizacao/>
        <LocalizacaoDeObra/>
        <PessoasAutorizadas/>
        <ProcessosEInteracoes/>
        <SituacaoEconomica/>
        <Tiaf/>
        <Tributario/>
        <ApuracaoDeTaxa/>

        
      
        
        
        <h2>Subtitulo</h2>
        <Button color='primary' variant='contained'>Clique aqui</Button>
        </>

    </Layout>
  )
}
