import {makeStyles} from '@material-ui/core'

const usestyles = makeStyles((theme) => ({
    input:{
        padding:'20px',
        height: '60px',
        fontSize: '20px',
        width: '700px',
        border: 'none',
        borderRadius: '10px'
    },
    busca:{
        padding: '40px',
        paddingTop:'40px',
        display:'flex',
        flexDirection:'row'
    }

}))

export default function Busca(){
    const styles = usestyles()
    return(
        <div className={styles.busca}>
            <input className={styles.input} type="text" placeholder="Buscar empresa"/>
            <input />
        </div>
    )
}