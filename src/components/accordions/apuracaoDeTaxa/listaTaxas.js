import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  campoTaxas:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  colunaCampoTaxas:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center'
   
  },
  areaBotao:{
    display:'flex',
    justifyContent:'space-between',
    marginTop:'20px',
    marginBottom:'20px'
  }
  
  
}))


export default function ListaTaxas() {
  const [value, setValue] = useState('female');
  const classes = useStyles()

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div style={{display:'flex', marginLeft:'30px' }}>


    <FormControl style={{ width:'810px'}} component="fieldset">
     
      <RadioGroup className={classes.campoTaxas} aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <div className={classes.colunaCampoTaxas}>
            <FormControlLabel value="tvcf" control={<Radio />} label="Taxa de vigilância, controle e fiscalização" />
            <Divider/>
            <FormControlLabel value="licenca" control={<Radio />} label="Taxa de licença para estabelecimento" />
            <Divider/>
            <FormControlLabel value="eventual" control={<Radio />} label="Taxa de autorização p exercício de at. eventual" />
            <Divider/>
            <FormControlLabel value="obra_publica" control={<Radio />} label="Taxa de licen. de obras e serv. em lougrad. púb." />
            <Divider/>
            <FormControlLabel value="obra_particular" control={<Radio />} label="Taxa de licen. para execução de obra particular" />
            <Divider/>
            <FormControlLabel value="licanca_area" control={<Radio />} label="Taxa de licença para uso de área pública" />
            <Divider/>
            <FormControlLabel value="publicidade" control={<Radio />} label="Taxa de autorização para publicidade" />
            
        </div>
        <div className={classes.colunaCampoTaxas}>
            <FormControlLabel value="female" control={<Radio />} label="Taxa de inspeção sanitária" />
            <Divider/>
            <FormControlLabel value="male" control={<Radio />} label="Taxa de fiscalização de transporte de passageiro" />
            <Divider/>
            <FormControlLabel value="other" control={<Radio />} label="Taxa de coleta e destinação final do lixo" />
            <Divider/>
            <FormControlLabel value="disabled" disabled control={<Radio />} label="Taxa de iluminação pública" />
            <Divider/>
            <FormControlLabel value="expediente" control={<Radio />} label="Taxa de expediente" />
            <Divider/>
            <FormControlLabel value="funerarios" control={<Radio />} label="Taxa de serviços funerários" />
            <Divider/>
            <FormControlLabel value="sanitaria" control={<Radio />} label="Taxa de inspeção sanitária" />
            
        </div>
        
      </RadioGroup>
      <div className={classes.areaBotao}>
          
            <Button style={{padding:'20px', border:'3px solid #0989FF', color:'#0989FF'}} variant='outlined'>CONSULTAR LEGISLAÇÃO</Button>
          
          
            <Button style={{padding:'20px', border:'3px solid #0989FF', color:'#0989FF'}} variant='outlined'>CALCULAR TAXA</Button>
         
          
            <Button style={{padding:'20px', border:'3px solid #46A836', color:'#46A836'}} variant='outlined'>AUTO DE INFRAÇÃO</Button>
          
         
        </div>
    </FormControl>
    </div>
  );
}