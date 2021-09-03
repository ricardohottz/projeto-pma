import { useRouter } from 'next/dist/client/router';
import {
    makeStyles,
    Hidden,
    Drawer,
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    Avatar,
    Divider,
    Typography,
    Button
} from '@material-ui/core'

import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined'; //lapis
import NoteAddOutlinedIcon from '@material-ui/icons/NoteAddOutlined';//tributario
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';//legislacao
import PermPhoneMsgOutlinedIcon from '@material-ui/icons/PermPhoneMsgOutlined';//comunicacao interna
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';//relatorio
import ImageSearchOutlinedIcon from '@material-ui/icons/ImageSearchOutlined';//fiscalizacao

const primaryMenu = [
    {id:1, label:'Cadastro', path:'/cadastro', icon: CreateOutlinedIcon},
    {id:2, label:'Tributário', path:'/tributario', icon: NoteAddOutlinedIcon},
    {id:3, label:'Legislação', path:'/legislacao', icon: LibraryBooksOutlinedIcon},
    {id:4, label:'Comunicação', path:'/comunicacao_interna', icon: PermPhoneMsgOutlinedIcon},
    {id:5, label:'Relatórios', path:'/relatorios', icon: AssessmentOutlinedIcon},
    {id:6, label:'Fiscalização', path:'/fiscalizacao', icon: ImageSearchOutlinedIcon}
]


const useStyles = makeStyles((theme) => ({
    menu:{
        padding:'1px',
        color:'white',
        marginTop:'10px',
        marginLeft:'5px'
        

    },
    listitem:{
        color:'white',
        marginTop:'2px',
        '&:hover':{
            backgroundColor:'#050F1A'
        }

    }
    
}))


export default function MenuPrincipal(){
    const router = useRouter()
    const classes = useStyles()
    
    const content = (
                    <div  display='flex' flexdirection='column'>
                        <div>
                            {primaryMenu.map((item) => {
                                const Icon = item.icon
                                return(
                                    <ListItem
                                        className={classes.listitem}
                                        key={item.id}
                                        button
                                        
                                        >
                                        <ListItemIcon style={{paddingLeft:'15px', margin:'0', display:'flex', width:'10px'}}>
                                            <Icon style={{color:'white'}}/>
                                        </ListItemIcon>
                                        <ListItemText 
                                        primary={item.label}
                                        />

                                    </ListItem>
                                )
                            })}
                        </div>
                    </div>
    )

    return(
        <>
        <div className={classes.menu}>NAVEGAÇÃO</div>
        <div >
            {content}
        </div>
        
        </>
    )
}