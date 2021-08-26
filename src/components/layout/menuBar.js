import { makeStyles } from '@material-ui/core/styles';
import TopMenuBar from './menuBar/top';
import ChamadaDeashboard from './menuBar/caixaDeashboard';

const useStyles = makeStyles((theme) => ({
    root:{
       boxShadow: 'none',
       backgroundColor: '#01162F',
       width:'222px',
       zIndex: theme.zIndex.appBar +1,

    }
}))

export default function MenuBar(){
    const styles = useStyles()
   
    return(
        <div className={styles.root}>
            
            <TopMenuBar/>
            <ChamadaDeashboard/>
            Menu Bar
        </div>
    )
}