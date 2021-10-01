import Layout from "../components/layout"
import {Button} from '@material-ui/core'
import Busca from '../components/cadastro/busca'
import Cabecalho from "../components/cadastro/cabecalho"
import ControlledAccordions from "../components/accordion"
import TopBar from "../components/layout/topBar"

export default function Comunicacao() {
  const menu = [
    {id:'11',menu:'Interna', path:'/dashboard/tributario'}, 
    {id:'12',menu:'Externa', path:'/dashboard/estrategico'}
  ]
  return (
    <Layout title = 'Sistema de consulta Fiscal - SEFAZ'>

        <>
        <TopBar tituloCabecalho='Comunicação' menu={menu}/>
        <Busca/>
        <ControlledAccordions/>
        <ControlledAccordions/>
        
        
        <h2>Subtitulo</h2>
        <Button color='primary' variant='contained'>Clique aqui</Button>
        </>

    </Layout>
  )
}
