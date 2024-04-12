import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import './TestManagement.scss'

const TestManagement = () => {
  return (
    <div className='testManagement'>
    <Sidebar/>
        <div className='container'>
        <Navbar/>    
        testManagement
        </div>
    </div>
  )
}

export default TestManagement