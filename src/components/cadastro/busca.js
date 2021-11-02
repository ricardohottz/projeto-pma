import {makeStyles} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Button } from '@material-ui/core';

const usestyles = makeStyles((theme) => ({
    input:{
        padding:'20px',
        height: '75px',
        fontSize: '20px',
        width: '490px',
        border: 'none',
        borderRadius: '6px'
    },
    input2:{
        padding:'20px',
        height: '75px',
        fontSize: '20px',
        width: '160px',
        border: 'none',
        borderRadius: '6px',
        marginLeft:'30px'
    },
    busca:{
        padding: '40px',
        paddingTop:'40px',
        paddingBottom:'30px',
        display:'flex',
        flexDirection:'row'
    },
    botao:{
        marginLeft:'22px',
        backgroundColor:'#4D5052',
        width:'200px',
        border:'6px solid white',
        color: 'white',
        fontSize:'1.3em',
        borderRadius:'6px'
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
      style={{ width: '180px', backgroundColor:'white', marginLeft: '15px', borderRadius:'6px', height:'75px', padding:'10px' }}
      renderInput={(params) => <TextField {...params} label="BUSCA POR" variant="outlined" />}
    />
    <Button className={styles.botao}>Buscar</Button>
        </div>
    )
}