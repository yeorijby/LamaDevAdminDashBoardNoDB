import './userList.css'
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { DeleteOutline } from '@mui/icons-material';
import { userRows } from '../../dummyData';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";


export default function UserList() {

  const [data, setData] = useState(userRows);

  const handleDelete = (id)=>{
    setData(data.filter(item=>item.id !== id));
  }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 200, renderCell:(params)=>{
          return (
            <div className='userListUser'>
              <img className="userListImg" alt="" src={params.row.avatar}/>
              {params.row.user}
            </div>
          )
        }},
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'status', headerName: 'Status', width: 120 },
        { field: 'transaction', headerName: 'Transaction Volume', width: 160 },
        { field: 'action', headerName: 'Action', width: 150, renderCell:(params)=>{
          return (
            <div className="userListAction">
              <Routes>
                <Route path={"/user"+params.row.id} element={<div/>} >
                  
                </Route>
              </Routes>



              <button className="userListEdit">Edit</button>
              <DeleteOutline 
                className="userListDelete"
                onClick={()=>{handleDelete(params.row.id)}}
                />            
            </div>
          )
        } },
      ];
      
    
  return (
    <div className='userList'>
      <DataGrid
        rows={data}
        columns={columns}
        disableSelectionOnClick
        pageSize={10}
        checkboxSelection
      />
    </div>
  )
}
