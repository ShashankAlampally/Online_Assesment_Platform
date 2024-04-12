import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import './Results.scss'
import Datatable from '../../Components/Datatable/Datatable'


const Results = () => {
  return (
    <div className='results'>
    <Sidebar/>    
        <div className='container'>
        <Navbar/>
        
        </div>
    </div>
  )
}

export default Results