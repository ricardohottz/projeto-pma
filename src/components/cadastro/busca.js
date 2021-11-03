import {makeStyles} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Button } from '@material-ui/core';
import InputBusca from './inputBusca';
import { useContext, useState } from 'react';
import { BuscaContext, BuscaContextProvider } from './context';
import { buscaPor } from './context';


const usestyles = makeStyles((theme) => ({
    input:{
        padding:'20px',
        height: '75px',
        fontSize: '20px',
        width: '490px',
        border: 'none',
        borderRadius: '6px',
        
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
        width:'194px',
        border:'6px solid white',
        color: 'white',
        fontSize:'.9em',
        borderRadius:'6px',
        height: '75px',
        
        '&:hover': {
            background: "#0D6CB0",
            },
        letterSpacing:'.12rem'
       
    }

}))



export default function Busca(){
    const styles = usestyles()
   
    const buscaPor = [{title:'CPF'}, {title:'CNPJ'}, {title:'NOME'}, {title:'INSCRIÇÃO'}] 
    const [inputValue, setInputValue] = useState('')
    
  

    return(
        
            <div className={styles.busca}>
            
            
                <InputBusca inputValue={inputValue}/>
                
                <Autocomplete
                    id="combo-box-demo"
                    options={buscaPor}
                    getOptionLabel={(option) => option.title}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                        
                            }}
                    getOptionSelected={(option, value) => option.value === value.value}
                    style={{ width: '187px', backgroundColor:'white', marginLeft: '15px', borderRadius:'6px', height:'75px', padding:'10px' }}
                    renderInput={(params) => <TextField {...params} label="BUSCA POR" variant="outlined" />}
                />
                <form action='/api/hello' method='GET'>   
                    <Button className={styles.botao}>Buscar empresa</Button>
                </form>
            </div> 

       
        
    )
}