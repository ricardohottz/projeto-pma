import Layout from "../components/layout"
import {Button} from '@material-ui/core'
import Busca from '../components/cadastro/busca'
import ControlledAccordions from "../components/accordion"
import TopBar from "../components/layout/topBar"

export default function Relatorios() {
  const menu = [
    {id:17, menu:'Tributário', path:'/dashboard/tributario'}, 
    {id:18, menu:'Estratégico', path:'/dashboard/estrategico'}
  ]
  return (
    <Layout title = 'Sistema de consulta Fiscal - SEFAZ'>

        <>
        <TopBar tituloCabecalho ='Relatórios' menu={menu} subtitulo='Relatórios / Repasses'/>
        <Busca/>
        <ControlledAccordions/>
        <ControlledAccordions/>
      
        <h2>Subtitulo</h2>
        <Button color='primary' variant='contained'>Clique aqui</Button>
        </>

    </Layout>
  )
}
