import React, { useEffect } from 'react'
import './TestLibrary.scss'
import Table from '../../Components/Table/Table'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import { useState } from 'react'
import axios from 'axios'

const TestLibrary = () => {
  const [activeTab, setActiveTab] = useState('Technical');
  const [testCategory,setTestCategory] = useState([])
  const [tests,setTests] = useState([])

  const handleTabChange = (tabId) => {
    setActiveTab(activeTab);
    axios.get("http://localhost:7000/viewTest/"+tabId).then((result)=>{
      console.log(result.data.data)
      
      setTests(result.data.data)
    })
  };
  useEffect(()=>{
    handleTabChange(activeTab);
    axios.get("http://localhost:7000/testCategory").then((result)=>{
      if(result.data){
        console.log("what:")
          console.log(result.data.exist)
            setTestCategory(result.data.exist)
      }
})
  },[])

  


  return (
    <div className='testLibrary'>
    <Sidebar/>
        <div className='container'>
        <Navbar/>
        <div className="container2">
      <ul className="nav nav-tabs" role="tablist">
        
      {
        testCategory&&testCategory.map((e)=>(
          <li className="nav-item">
          <a
            
            role="tab"
            className={`nav-link category ${activeTab === `${e.categoryName}` ? 'active' : ''}`}
            onClick={() => handleTabChange(`${e.categoryName}`)}
          >
          {e.categoryName}
          </a>
        </li>
        ))
      }
      </ul>
      <Table tests={tests}/>
      
    </div>


        </div>
    
    </div>
  )
}

export default TestLibrary