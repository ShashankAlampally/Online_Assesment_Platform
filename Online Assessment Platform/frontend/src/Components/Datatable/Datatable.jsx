import React from 'react'
import './Datatable.scss'
import { DataGrid } from '@mui/x-data-grid';


const Datatable = (props) => {
    const {userdata} = props
    console.log("datatable")
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'username', headerName: 'USERNAME', width: 130 },
        { field: 'role', headerName: 'ROLE', width: 100 },
        {
          field: 'email',
          headerName: 'EMAIL',
          
          width: 200,
        },
        
      ];
    const rows = userdata.map((e,key)=>({
        id:key+1,username:e.username,role:e.role,email:e.email
      }))
    

      
      
  return (
    <div className='datatable'>
    <DataGrid
    rows={rows}
    columns={columns}
    initialState={{
      pagination: {
        paginationModel: { page: 0, pageSize: 5 },
      },
    }}
    pageSizeOptions={[5, 10]}
    checkboxSelection
  />
    </div>
  )
}

export default Datatable