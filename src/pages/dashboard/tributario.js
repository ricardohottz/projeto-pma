import Layout from "../../components/layout"
import TopBar from "../../components/layout/topBar"
import GraficoPrincipal from "../../components/charts/comparativo"
import GraphicCards from "../../components/charts/cards"


export default function Dashboard() {
  
  return (
    <Layout title = 'Sistema de consulta Fiscal - SEFAZ'>

        <>

        <TopBar   tituloCabecalho ='Dashboard' menu={{menu1:'Tributário', menu2:'Estratégico', menu3:'Processual'}} cor='#ffff'/>
         
          <GraphicCards/>
          <GraficoPrincipal/>
       
        </>

    </Layout>
  )
}
