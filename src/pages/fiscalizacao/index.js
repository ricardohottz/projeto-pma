import Layout from "../../components/layout"
import {Button} from '@material-ui/core'
import Busca from '../../components/cadastro/busca'
import Cabecalho from "../../components/cadastro/cabecalho"
import ControlledAccordions from "../../components/accordion"
import TopBar from "../../components/layout/topBar"

export default function Fiscalizacao() {
  return (
    <Layout title = 'Sistema de consulta Fiscal - SEFAZ'>

        <>
        <TopBar tituloCabecalho ='Fiscalizacao' menu={{menu1:'Home', menu2:'Calculos', menu3:'Lancamentos'}}/>
        <Busca/>
        <ControlledAccordions/>
        <ControlledAccordions/>
      
        <h2>Subtitulo</h2>
        <Button color='primary' variant='contained'>Clique aqui</Button>
        </>

    </Layout>
  )
}
