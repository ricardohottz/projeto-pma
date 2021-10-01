import Layout from "../../components/layout"
import TopBar from "../../components/layout/topBar"
import dynamic from "next/dynamic"
import SimpleCard from "../../components/charts/card"


export default function Dashboard() {
  const MapWithNoSSR = dynamic(() => import('../../components/charts/heatMap'), {
    ssr: false
  })
  return (
    <Layout title = 'Sistema de consulta Fiscal - SEFAZ'>

        <>

        <TopBar tituloCabecalho ='Dashboard' menu={{menu1:'Tributário', menu2:'Estratégico', menu3:'Processual'}} />
            
          
          <div style={{display:'flex', flexDirection:'row', marginTop:'5px'}}>
            <div>
              <MapWithNoSSR/> 
            </div>
            <div>
              <SimpleCard/>
              <SimpleCard/>
              <SimpleCard/>
              <SimpleCard/>
            </div>
          </div>
          
       
        </>

    </Layout>
  )
}
