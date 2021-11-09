import style from '../../../styles/fiscalizacao.module.css'

export default function AnoExistencia(){
    return(
        
        // Período decaído 

        <>
        <div className={style.periodo}>
            <div className={style.existencia}>
                <div className={style.ano}>

                    <div className={style.anoDecadencia}>
                        
                        2011
                    </div>

                    <div className={style.continuaDecadencia}></div>

                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                    <div className={style.timeLine}></div>
                    

                </div>
                
            </div>
        </div>


         {/* Periodo auditável */}


        <div className={style.periodo}>
            <div className={style.existencia}>
                <div className={style.ano}>

                    <div className={style.anoDecadencia}>
                        
                        2012
                    </div>

                    <div className={style.continuaDecadencia}></div>

                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                    <div className={style.timeLine}></div>
                    

                </div>
                
                
            </div>
        </div>
                {/* ano auditado  */}

        <div className={style.periodo}>
            <div className={style.existencia}>
                <div className={style.ano}>

                    <div className={style.anoAuditado}>
                        
                        2013
                    </div>

                    <div className={style.continuaAuditado}></div>

                </div >
                <div style={{display:'flex', alignItems:'center'}}>
                    <div className={style.timeLineinicio}></div>
                    <div className={style.timeLineAuditado}></div>
                

                </div>
                
                
            </div>
        </div>

        <div className={style.periodo}>
            <div className={style.existencia}>
                <div className={style.ano}>

                    <div className={style.anoAuditado}>
                        
                        2014
                    </div>

                    <div className={style.continuaAuditado}></div>

                </div >
                <div style={{display:'flex', alignItems:'center'}}>
                    
                    <div className={style.timeLineAuditado}></div>
                    <div className={style.timeLineinicio}></div>

                </div>
                
                
            </div>
        </div>


          {/* Periodo auditável */}


          <div className={style.periodo}>
            <div className={style.existencia}>
                <div className={style.ano}>

                    <div className={style.anoDecadencia}>
                        
                        2015
                    </div>

                    <div className={style.continuaDecadencia}></div>

                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                    <div className={style.timeLine}></div>
                    

                </div>
                
                
            </div>
        </div>

          {/* Periodo auditável */}


          <div className={style.periodo}>
            <div className={style.existencia}>
                <div className={style.ano}>

                    <div className={style.anoAuditavel}>
                        
                        2016
                    </div>

                    <div className={style.continuaAuditavel}></div>

                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                    <div className={style.timeLine}></div>
                    

                </div>
                
                
            </div>
        </div>
          {/* Periodo auditável */}


          <div className={style.periodo}>
            <div className={style.existencia}>
                <div className={style.ano}>

                    <div className={style.anoAuditavel}>
                        
                        2017
                    </div>

                    <div className={style.continuaAuditavel}></div>

                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                    <div className={style.timeLine}></div>
                    

                </div>
                
                
            </div>
        </div>

        </>


    )
}