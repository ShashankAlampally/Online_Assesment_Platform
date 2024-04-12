import React from 'react'
import './Table.scss'
import { DataGrid } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import PreviewIcon from '@mui/icons-material/Preview';
import { Navigate, useNavigate } from 'react-router-dom';

const Table = (props) => {
    const { tests } = props;
    const navigate = useNavigate()
    console.log("datatable", tests);

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'testName', headerName: 'TESTNAME', width: 200 },
        { field: 'difficultyLevel', headerName: 'DIFFICULTY', width: 100 },
        { field: 'durationPerTest', headerName: 'DURATION', width: 100 },
        
        {headerName:"No.of Questions",width:150},
        {
          field: "action",
          headerName: "Action",
          width: 100,
          renderCell: (params) => (
              <button className='btn btn-primary' onClick={()=>{
                console.log(params)
                navigate(`questions/${params.row._id}`)
              }}>
                  View
              </button>
          )
      },
    ];

    const rows = tests ? tests.map((e, key) => ({
        id: key + 1,
        testName: e.testName,
        difficultyLevel: e.difficultyLevel,
        durationPerTest: e.durationPerTest,
        _id : e._id
    })) : [];

    const handleEdit = (id) => {
        // Handle edit action
        console.log('Edit', id);
    };

    const handleAction = (id) => {
        // Handle action click
        console.log('Action Clicked for ID:', id);
    };

    return (
        <div className='datatable'>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                checkboxSelection
            />
        </div>
    );
};

export default Table;
