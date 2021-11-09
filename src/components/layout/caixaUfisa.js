import style from '../../styles/caixaUfisa.module.css'

const ufisa =[
    {ano:2010,valor:'R$100,00'},
    {ano:2020,valor:'R$200,00'},
    {ano:2030,valor:'R$300,00'},
    {ano:2040,valor:'R$400,00'},

]



export default function CaixaUfisa(){
    
    return(
        <div className={style.caixaUfisa}>
            <div className={style.ufisaRotativa}>top</div>
                               
                               
        </div>
    )
}