import { useRouter } from 'next/dist/client/router';
import Link from 'next/link'
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
    {id:20, label:'Cadastro', path:'/cadastro', icon: CreateOutlinedIcon},
    {id:30, label:'Tributário', path:'/tributario', icon: NoteAddOutlinedIcon},
    {id:40, label:'Legislação', path:'/legislacao', icon: LibraryBooksOutlinedIcon},
    {id:50, label:'Comunicação', path:'/comunicacao', icon: PermPhoneMsgOutlinedIcon},
    {id:60, label:'Relatórios', path:'/relatorios', icon: AssessmentOutlinedIcon},
    {id:70, label:'Fiscalização', path:'/fiscalizacao', icon: ImageSearchOutlinedIcon}
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
                                    <Link key={item.id} href={item.path} passHref>
                                    
                                        <ListItem
                                            className={classes.listitem}
                                            
                                            button
                                           
                                            >
                                            <ListItemIcon style={{paddingLeft:'15px', margin:'0', display:'flex', width:'10px'}}>
                                                <Icon style={{color:'white'}}/>
                                            </ListItemIcon>
                                            <ListItemText 
                                            primary={item.label}
                                            />

                                        </ListItem>
                                    </Link>
                                    
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