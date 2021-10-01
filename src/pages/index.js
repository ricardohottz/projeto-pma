import Layout from "../components/layout"
import {Button} from '@material-ui/core'
import Busca from '../components/cadastro/busca'
import Cabecalho from "../components/cadastro/cabecalho"
import ControlledAccordions from "../components/accordion"
import TopBar from "../components/layout/topBar"
import Enquadramento from "../components/accordions/enquadramento"

export default function Home() {
  const menu = [
    {id:13,menu:'Tributário', path:'/dashboard/tributario'}, 
    {id:14,menu:'Estratégico', path:'/dashboard/estrategico'}
  ]
  return (
    <Layout title = 'Sistema de consulta Fiscal - SEFAZ'>

        <>
        <TopBar tituloCabecalho='HOME' menu={menu}/>
        <Busca/>
        <ControlledAccordions/>
        <Enquadramento/>
        <Cabecalho/>
        
        <h2>Subtitulo</h2>
        <Button color='primary' variant='contained'>Clique aqui</Button>
        </>

    </Layout>
  )
}
