import Layout from "../../components/layout"
import TopBar from "../../components/layout/topBar"
import GraficoPrincipal from "../../components/charts/comparativo"
import GraphicCards from "../../components/charts/cards"


export default function Dashboard() {
  const menu = [
    {id:3, menu:'Tributário', path:'/dashboard/tributario'}, 
    {id:4, menu:'Estratégico', path:'/dashboard/estrategico'},
    {id:5, menu:'Repasses', path:'/dashboard/repasses'}
  ]
  return (
    <Layout title = 'Sistema de consulta Fiscal - SEFAZ'>

        <>

        <TopBar   tituloCabecalho ='Dashboard' menu={menu} subtitulo='Dashboard / Repasses'/>
         
          <GraphicCards/>
          <GraficoPrincipal/>
       
        </>

    </Layout>
  )
}
