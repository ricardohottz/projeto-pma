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
        color:'#0362A7',
        letterSpacing:'.1rem'

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
    const onChangeNome = (ev) => {
        
        
        setValue(ev.target.value)}
   
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
                autoComplete='off'
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
                autoComplete='off'
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
                autoComplete='off'
                className={classes.input}
                name='busca'
                type='text'
                placeholder='Digite o nome para buscar'
                onChange={onChangeNome}
                value={value}
            />)}
        
        if(inputValue === 'INSCRIÇÃO'){
            return(
                <input
                autoComplete='off'
                className={classes.input}
                name='busca'
                type='text'
                placeholder='Digite a Inscrição para buscar'
                onChange={onChangeCNPJ}
                value={value}
            />)}
    }