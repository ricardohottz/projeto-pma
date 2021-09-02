import Layout from "../components/layout"
import {Button} from '@material-ui/core'
import Busca from '../components/cadastro/busca'
import Cabecalho from "../components/cadastro/cabecalho"
import ControlledAccordions from "../components/accordion"

export default function Home() {
  return (
    <Layout title = 'Sistema de consulta Fiscal - SEFAZ'>

        <div>
        <Busca/>
        <ControlledAccordions/>
        <ControlledAccordions/>
        <Cabecalho/>
        
        <h2>Subtitulo</h2>
        <Button color='primary' variant='contained'>Clique aqui</Button>
        </div>

    </Layout>
  )
}
