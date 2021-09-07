import Layout from "../components/layout"
import {Button} from '@material-ui/core'
import Busca from '../components/cadastro/busca'
import Cabecalho from "../components/cadastro/cabecalho"
import ControlledAccordions from "../components/accordion"
import TopBar from "../components/layout/topBar"
import dynamic from "next/dynamic";

export default function Cadastro() {
  const MapWithNoSSR = dynamic(() => import("../components/map.js"), {

    ssr: false
  })
  return (
    <Layout title = 'Sistema de consulta Fiscal - SEFAZ'>

        <>
        <TopBar tituloCabecalho ='Cadastro' menu={{menu1:'Home', menu2:'Imóveis', menu3:'Empresas', menu3:'Pessoas'}}/>
        <Busca/>
        <main>
        <div id="map">
          <MapWithNoSSR />
        </div>
      </main>

        <ControlledAccordions/>
        <ControlledAccordions/>
      
        <h2>Subtitulo</h2>
        <Button color='primary' variant='contained'>Clique aqui</Button>
        </>

    </Layout>
  )
}
