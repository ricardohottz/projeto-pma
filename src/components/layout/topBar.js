import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
    root:{
       boxShadow: 'none',
       backgroundColor: '#6fff'

    }
}))

export default function TopBar(){
    const styles = useStyles()

    return(
        <AppBar className={styles.root}>
            <Toolbar>

            </Toolbar>
        </AppBar>
    )
}