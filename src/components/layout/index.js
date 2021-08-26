import TopBar from './topBar'
import MenuBar from './menuBar'
import {makeStyles} from '@material-ui/core'
import Head from 'next/head'


const useStyles = makeStyles((theme) => ({
    root:{
        backgroundColor: theme.palette.background.dark,
        display:'flex',
        height:'100vh',
        width:'100vw',
        overflow:'hidden'
    },
    
    wrapper:{
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
        backgroundColor: '#EBEAEA',
        marginTop: '170px',
        paddingLeft:'10px'
       
    },

    contentContainer: {
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden'
    },

    content: {
        flex: '1 1 auto',
        height: '100%',
        overflow: 'auto'
    }
}))


export default function Layout({children, title}){
    const classes = useStyles()


    return(
        <>
        <Head>
            <title>{title}</title>
        </Head>

        <div className={classes.root}>
            <TopBar/>

            <MenuBar>oi</MenuBar>
            <div className={classes.wrapper}>

                <div className={classes.contentContainer}>

                    <div className={classes.content}>
                        {children}
                    </div>
                    
                </div>

            </div>
 
        </div>
        
        </> 
    )
}