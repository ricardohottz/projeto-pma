import Layout from "../../components/layout"
import {Button} from '@material-ui/core'
import Busca from '../../components/busca_pessoa/busca'
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
import SituacaoEconomica from "../../components/accordions/situacaoEconomica"
import Autorizacao from "../../components/accordions/autorizacao"



export default function FiscalizacaoPage() {
  const menu = [
    {id:'5', menu:'Econômico', path:'/fiscalizacao'}, 
    {id:'6',menu:'Pessoa', path:'/fiscalizacao/pessoa'},
    {id:'7',menu:'Imóvel', path:'/fiscalizacao/imovel'},
    {id:'1',menu:'Bancos', path:'/fiscalizacao/bancos'},

  ]
  return (
    <Layout title = 'Sistema de consulta Fiscal - SEFAZ'>

        <>
        <TopBar tituloCabecalho ='Fiscalizacao' menu={menu} subtitulo='Fiscalização / Bancos'/>
        <Busca/>
        Bancos
        
      
        
        </>

    </Layout>
  )
}
