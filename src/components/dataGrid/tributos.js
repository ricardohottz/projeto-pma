import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { makeStyles } from '@material-ui/core';

import { useContext } from 'react';
import { IssContext } from '../accordions/issqn/context';


const useStyles = makeStyles((theme) => ({
    grid:{
        // backgroundColor:'#F3F3F3',
        border:'0px',


    }
}))

const columns = [
    { field: 'id', headerName: 'Guia', width: 86, disableColumnMenu:true },
    {
      field: 'firstName',
      headerName: 'Ano',
      width: 82,
      disableColumnMenu:true
    //   editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Tributo',
      width: 110,
      disableColumnMenu:true
    //   editable: true,
    },
    {
      field: 'age',
      headerName: 'valor',
      width: 110,
      disableColumnMenu:true
    //   type: 'number',
    //   editable: true,
    },
    {
      field: 'vencimento',
      headerName: 'venc',
      description: 'This column has a value getter and is not sortable.',
      sortable: true,
      disableColumnMenu:true,
      width: 100,
    //   valueGetter: (params) =>
    //     `${params.getValue(params.id, 'firstName') || ''} ${
    //       params.getValue(params.id, 'lastName') || ''
    //     }`,
    },
    {
      field: 'total',
      headerName: 'Total',
      width: 130,
      disableColumnMenu:true
    //   editable: true,
    }

  ];

  const rows = [
    { id: 14380, lastName: 'ISSQN', firstName: '2021', age: 'R$ 350,00', vencimento: '12/12/21'},
    { id: 24543, lastName: 'ISSQN-R', firstName: '2021', age: 'R$ 350,00',vencimento: '12/12/21' },
    { id: 32323, lastName: 'ISSQN', firstName: '2021', age: 'R$ 350,00', vencimento: '12/12/21' },
    { id: 56334, lastName: 'ISSQN', firstName: '2020', age: 'R$ 350,00', vencimento: '12/12/21' },
    { id: 45356, lastName: 'ISSQN', firstName: '2018', age: 'R$ 350,00', vencimento: '12/12/21' },
    { id: 65654, lastName: 'ISSQN', firstName: '2019', age: 'R$ 144.350,00', vencimento: '12/12/21' },
    { id: 78799, lastName: 'ISSQN', firstName: '2022', age: 'R$ 350,00', vencimento: '12/12/21' },
    { id: 86575, lastName: 'ISSQN-R', firstName: '2013', age: 'R$ 350,00', vencimento: '12/12/21' },
    { id: 95644, lastName: 'ISSQN', firstName: '2022', age: 'R$ 350,00', vencimento: '12/12/21' },
  ];

  export default function DataGridDemo() {
      const classes = useStyles()
      
      
      const {SelectNumpre} = useContext(IssContext)
      

     




    return (
      <div style={{ height: '430px', width: '850px' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={6}
          rowsPerPageOptions={[6]}
          disableSelectionOnClick={false}
          onCellClick={SelectNumpre}
          selectable={false}
          className={classes.grid}
          hideFooterSelectedRowCount={true}
          autoHeight={true}
          
          

        />
         
        
      </div>
    );
  }