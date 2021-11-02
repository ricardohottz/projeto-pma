import Layout from "../components/layout"
import {Button} from '@material-ui/core'
import Busca from '../components/cadastro/busca'
import Cabecalho from "../components/cadastro/cabecalho"
import ControlledAccordions from "../components/accordion"
import TopBar from "../components/layout/topBar"
import Example from "../components/charts/issqn"


export default function Legislacao() {
  const menu = [
    {id:15, menu:'Tributário', path:'/dashboard/tributario'}, 
    {id:16, menu:'Estratégico', path:'/dashboard/estrategico'}
  ]
  return (
    <Layout title = 'Sistema de consulta Fiscal - SEFAZ'>

        <>
        <TopBar tituloCabecalho ='Legislação' menu={menu} subtitulo='Legislação / Repasses'/>
        <Example/>
        
        <Busca/>
        <ControlledAccordions/>
        <ControlledAccordions/>
      
        <h2>Subtitulo</h2>
        <Button color='primary' variant='contained'>Clique aqui</Button>
        </>

    </Layout>
  )
}
