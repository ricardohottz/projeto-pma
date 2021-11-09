import AccordionPadrao from '../accordion';
import DataGridDemo from '../../dataGrid/tributos';
import { useState } from 'react';
import { IssContextProvider } from './context';
import HandleNumpre from './handleNumpre';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';




export default function Issqn(){
    const icone = () => <AttachMoneyIcon style={{color:'#B2B2B2'}}/>
    
    const [disabled, setDisabled] = useState(false)

    
    return(
        <IssContextProvider>
            <AccordionPadrao title='ISSQN' disabled={disabled} icone={icone}>
                <main>
                    <div >
                        <DataGridDemo/>
                        <div style={{textAlign:'center', paddingBottom:'20px'}}>
                            <HandleNumpre/>
                        </div>
                        
                    </div>
                </main>
            </AccordionPadrao>
        </IssContextProvider>
        
    )
}