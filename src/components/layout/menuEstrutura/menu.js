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
    {id:4, label:'Comunicação Interna', path:'/comunicacao_interna', icon: PermPhoneMsgOutlinedIcon},
    {id:5, label:'Relatórios', path:'/relatorios', icon: AssessmentOutlinedIcon},
    {id:6, label:'Fiscalização', path:'/fiscalizacao', icon: ImageSearchOutlinedIcon}
]


const useStyles = makeStyles((theme) => ({
    menu:{
        padding:'15px',
        color:'white'
    },
    
}))


export default function MenuPrincipal(){
    const router = useRouter()
    const styles = useStyles()
    
    const content = (
                    <div  display='flex' flexdirection='column'>
                        <div>
                            {primaryMenu.map((item) => {
                                const Icon = item.icon
                                return(
                                    <ListItem
                                        key={item.id}
                                        button
                                        style={{color:'white', padding:'1px'}}
                                        >
                                        <ListItemIcon style={{paddingLeft:'17px'}}>
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
        <div className={styles.menu}>NAVEGAÇÃO</div>
        <div >
            {content}
        </div>
        
        </>
    )
}