import { makeStyles } from "@material-ui/core"
import { useState } from "react"
import { mask , unMask} from 'remask'

const usestyles = makeStyles((theme) => ({
    input:{
        padding:'20px',
        height: '75px',
        fontSize: '20px',
        width: '490px',
        border: 'none',
        borderRadius: '6px',
        // transition: 'opacity 0.5s',
        opacity: '0%'
    },
    

}))


export default function InputBusca({inputValue}){
    
    const classes = usestyles()
    const [value, setValue] = useState('')



    const onChangeCPF = (ev) => {
        const originalValue = unMask(ev.target.value)
        const maskedValue = mask(originalValue,['999.999.999-99'])
        
        setValue(maskedValue)}
        
    const onChangeCNPJ = (ev) => {
        const originalValue = unMask(ev.target.value)
        const maskedValue = mask(originalValue,['99.999.999/9999-99'])
           
        setValue(maskedValue)
        
    }
   
        if(inputValue === ''){
            return(
                <input
                disabled
                className={classes.input}
                name='busca'
                type='text'
                placeholder='Selecione o tipo de busca'
                
                value=''
                style={{backgroundColor:'#DDDDDD', color:'black'}}
            />)}

        if(inputValue === 'CPF'){
            return(
                <input
                
                className={classes.input}
                name='busca'
                type='text'
                placeholder='Digite o CPF para buscar'
                onChange={onChangeCPF}
                value={value}
            />)}
        if(inputValue === 'CNPJ'){
            return(
                <input
                
                className={classes.input}
                name='busca'
                type='text'
                placeholder='Digite o CNPJ para buscar'
                onChange={onChangeCNPJ}
                value={value}
            />)}
        
        if(inputValue === 'NOME'){
            return(
                <input
                
                className={classes.input}
                name='busca'
                type='text'
                placeholder='Digite o nome para buscar'
                onChange={onChangeCNPJ}
                value={value}
            />)}
        
        if(inputValue === 'INSCRI????O'){
            return(
                <input
                
                className={classes.input}
                name='busca'
                type='text'
                placeholder='Digite a Inscri????o para buscar'
                onChange={onChangeCNPJ}
                value={value}
            />)}
    }