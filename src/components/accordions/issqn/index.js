import AccordionPadrao from '../accordion';
import DataGridDemo from '../../dataGrid/tributos';
import Button from '@material-ui/core/Button';
import { IssContextProvider } from './context';
import HandleNumpre from './handleNumpre';
import { useEffect } from 'react';



export default function Issqn(){

    
    return(
        <IssContextProvider>
            <AccordionPadrao title='ISSQN'>
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