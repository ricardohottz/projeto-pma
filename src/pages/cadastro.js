import Layout from "../components/layout"
import {Button} from '@material-ui/core'
import Busca from '../components/cadastro/busca'

import TopBar from "../components/layout/topBar"
import CorpoSocietario from "../components/accordions/corpoSocietario"
import Localizacao from "../components/accordions/localizacao"
import Fiscalizacao from "../components/accordions/fiscalizacao"
import Tributario from "../components/accordions/tributario"
import Enquadramento from "../components/accordions/enquadramento"
import PessoasAutorizadas from "../components/accordions/pessoasAutorizadas"
import ProcessosEInteracoes from "../components/accordions/processosInteracoes"

export default function Cadastro() {
  const menu = [
    {id:'8', menu:'Econômico', path:'/dashboard/tributario'}, 
    {id:'9',menu:'Pessoa', path:'/dashboard/estrategico'},
    {id:'10',menu:'Imóvel', path:'/dashboard/estrategico'},

  ]
  return (
    <Layout title = 'Sistema de consulta Fiscal - SEFAZ'>

        <>
        <TopBar tituloCabecalho ='Cadastro' menu={menu} subtitulo='Cadastro / Econômico'/>
        <Busca/>

        <Localizacao/>
        <CorpoSocietario/>
        <Fiscalizacao/>
        <Tributario/>
        <Enquadramento/>
        <PessoasAutorizadas/>
        <ProcessosEInteracoes/>
      
        <h2>Subtitulo</h2>
        <Button color='primary' variant='contained'>Clique aqui</Button>
        </>

    </Layout>
  )
}
