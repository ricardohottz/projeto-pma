import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Children, useState } from 'react';
import { Icon } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import LinkIcon from '@material-ui/icons/Link';
import PeopleIcon from '@material-ui/icons/People';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '909px',
      marginLeft:'39px',
      marginTop: '0px',
      marginBottom:'15px'
      
    },
    accordionLinha:{
        display:'flex',
        alignItems:'center',
        width:'100%'
    },
    heading: {
      fontSize: theme.typography.pxToRem(20),
      color: '#B2B2B2',
      padding:'10px',
      flexBasis: '33.33%',
      flexShrink: 0,
      

    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    Accordion:{
        display:'flex',
        alignItems:'center'
    },

    corpoSocietario:{
      
        display:'flex',
        flexDirection:'row',
        borderTop:'solid 3px #DFDFDF',
        paddingTop:'10px'
        
        
    },
    corpoSocietario_col1:{
        
        width:'540px',
        // padding:'10px',
        display:'flex',
        flexDirection:'column'
    },
    corpoSocietario_col2:{
        width:'150px',
        paddingLeft:'20px',
        display:'flex',
        justifyContent:'center'
    },
    corpoSocietario_col3:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width:'180px',
        padding:'5px'
    },
    corpoSocietario_col1_linha:{
        display:'flex',
        flexDirection:'row',
        margin:'5px',
        
    },
    bloco:{
        marginRight:'20px',
        display:'flex'
        
    },
    cabecas:{
        fontSize:'15px',
        fontWeight:'bold',
        paddingRight:'5px'
    }
        }));


export default function AccordionPadrao({children, title}) {
        const classes = useStyles();

    const [expanded, setExpanded] = useState(false);
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              
            >
                <div className={classes.accordionLinha}>
                    <PeopleIcon style={{color:'#B2B2B2'}}/>
                    <Typography displayInline className={classes.heading}>{title}</Typography>
                
                </div>
                    
            </AccordionSummary>
            <AccordionDetails>
          
             {children}
            </AccordionDetails>
            
          </Accordion>
          
        </div>
    )}