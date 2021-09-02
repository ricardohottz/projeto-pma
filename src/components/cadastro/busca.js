import {makeStyles} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const usestyles = makeStyles((theme) => ({
    input:{
        padding:'20px',
        height: '75px',
        fontSize: '20px',
        width: '670px',
        border: 'none',
        borderRadius: '10px'
    },
    input2:{
        padding:'20px',
        height: '75px',
        fontSize: '20px',
        width: '208px',
        border: 'none',
        borderRadius: '10px',
        marginLeft:'30px'
    },
    busca:{
        padding: '40px',
        paddingTop:'40px',
        display:'flex',
        flexDirection:'row'
    }

}))

const tipos = [{title:'CPF'}, {title: 'CNPJ'}, {title: 'NOME'}, {title: 'INCRIÇÃO'}]

export default function Busca(){
    const styles = usestyles()

    return(
        <div className={styles.busca}>
            <input className={styles.input} type="text" placeholder="Buscar empresa"/>
            
            <Autocomplete
      id="combo-box-demo"
      options={tipos}
      getOptionLabel={(option) => option.title}
      style={{ width: '208px', backgroundColor:'white', marginLeft: '30px', borderRadius:'10px', height:'75px', padding:'10px' }}
      renderInput={(params) => <TextField {...params} label="BUSCA POR" variant="outlined" />}
    />
        </div>
    )
}