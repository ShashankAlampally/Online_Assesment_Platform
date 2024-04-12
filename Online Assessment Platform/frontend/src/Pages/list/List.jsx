import React, { useEffect, useState } from 'react'
import './List.scss'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import Datatable from '../../Components/Datatable/Datatable'
import  axios  from 'axios'


const List = () => {
  const [userdata,setUserdata] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:7000/viewusers").then((result)=>{
      setUserdata(result.data.data)
      
    })
  },[])
  console.log("List"+userdata)

  return (
    <div className='list'>
        <Sidebar/>
        <div className='listContainer'>
        <Navbar/>
        <Datatable userdata = {userdata}/>
        </div>
    </div>
  )
}

export default List