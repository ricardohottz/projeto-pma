import style from '../../../../styles/tiaf.module.css'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core';

const options = ['Option 1', 'Option 2'];
const legislacao = [{resumo:'Art 1º - Incluindo a diretriz básica do cumprimento de sentença ', artigo:'Art. 1o  Esta Lei estabelece normas gerais sobre licitações e contratos administrativos pertinentes a obras, serviços, inclusive de publicidade, compras, alienações e locações no âmbito dos Poderes da União, dos Estados, do Distrito Federal e dos Municípios. Parágrafo único.  Subordinam-se ao regime desta Lei, além dos órgãos da administração direta, os fundos especiais, as autarquias, as fundações públicas, as empresas públicas, as sociedades de economia mista e demais entidades controladas direta ou indiretamente pela União, Estados, Distrito Federal e Municípios. Esta Lei estabelece normas gerais sobre licitações e contratos administrativos pertinentes a obras, serviços, inclusive de publicidade, compras, alienações e locações no âmbito dos Poderes da União, dos Estados, do Distrito Federal e dos Municípios. Parágrafo único.  Subordinam-se ao regime desta Lei, além dos órgãos da administração direta, os fundos especiais, as autarquias, as fundações públicas, as empresas públicas, as sociedades de economia mista e demais entidades controladas direta ou indiretamente pela União, Estados, Distrito Federal e Municípios.'}, {resumo:'Este é o resumo 2', artigo:'ART888 - Este é o artigo'}]

const useStyles = makeStyles((theme) => ({
  inputRoot: {
    color:"#FF7A00",
    width:'645px',
    backgroundColor:'white',
      "& .MuiOutlinedInput-notchedOutline": 
      {
    
        border:'solid 3px #FF7A00',
        color:'black'
      },
      "&:hover .MuiOutlinedInput-notchedOutline ": {
        border:'solid 3px #1877BB'
      },
      
  },
}))

export default function AutocompleteComponent(){

    const classes = useStyles()
    const [value, setValue] = useState(null);
    //const [inputValue, setInputValue] = useState(null);
    

    return(
        <div>
           <Autocomplete
            id="combo-box-demo"
            options={legislacao}
            getOptionLabel={(option) => option.resumo}
            classes={classes}

            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
              
        }}
            renderInput={(params) => <TextField {...params} label="Embasamento Legal" variant="outlined" />}
/>
      <div>
        <textarea className={style.resumo} value={value === null? 'Selecione um parâmetro':(value.resumo)}/>
        <textarea className={style.detalhesArtigo} value={value === null? 'Selecione um parâmetro':(value.artigo)}/>
      </div>
                        
        </div>
        
    )
}