import Layout from "../components/layout"
import {Button} from '@material-ui/core'
import Busca from '../components/cadastro/busca'

export default function Home() {
  return (
    <Layout title = 'Sistema de consulta Fiscal - SEFAZ'>

        <div>
        <Busca/>
        <h2>Subtitulo</h2>
        <Button color='primary' variant='contained'>Clique aqui</Button>
        </div>

    </Layout>
  )
}
