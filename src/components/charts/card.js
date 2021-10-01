import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) =>({
    card:{
        height:'95px',
        width:'214px',
        backgroundColor:'white',
        borderRadius:'5px',
        marginLeft:'15px',
        marginBottom:'15px'
        
    }
}))

export default function SimpleCard(){
    const classes = useStyles()
    return(
        
            <div className={classes.card}></div>
            
        
    )
}