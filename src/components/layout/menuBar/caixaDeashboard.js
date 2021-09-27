import {makeStyles} from '@material-ui/core'
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
   caixa: {
    padding:'15px',
    display: 'flex',
    color: 'white',
    backgroundColor:'black',
    borderTop:'solid 1px #FFF ',
    borderBottom:'solid 1px #FFF '

   },
   home: {
       paddingRight: '10px'
   }
}))


export default function ChamadaDeashboard(){
    const styles = useStyles()
    return(
        <div className={styles.caixa}>
                <div className={styles.home}><img src='/home.svg' alt='home'/></div>
                <Link href='/dashboard/tributario'>
                    <a>Dashboard - Início</a>
                </Link>
        </div>
    )
}