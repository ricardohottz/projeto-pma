import { makeStyles } from "@material-ui/core"
import { useState } from "react"
import { mask , unMask} from 'remask'

const usestyles = makeStyles((theme) => ({
    input:{
        padding:'20px',
        height: '75px',
        fontSize: '24px',
        width: '490px',
        border: 'none',
        borderRadius: '6px',
        color:'#0362A7',
        letterSpacing:'.05rem'

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
                placeholder='SELECIONE A BUSCA'
                
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
                placeholder='DIGITE O CPF PARA BUSCAR'
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
                placeholder='DIGITE O CNPJ PARA BUSCAR'
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
                placeholder='DIGITE O NOME PARA BUSCAR'
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
                placeholder='DIGITE A INSCRIÇÃO PARA BUSCAR'
                onChange={onChangeCNPJ}
                value={value}
            />)}
    }