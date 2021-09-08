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
  
  return (
    <Layout title = 'Sistema de consulta Fiscal - SEFAZ'>

        <>
        <TopBar tituloCabecalho ='Cadastro' menu={{menu1:'Home', menu2:'Imóveis', menu3:'Empresas', menu3:'Pessoas'}}/>
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
