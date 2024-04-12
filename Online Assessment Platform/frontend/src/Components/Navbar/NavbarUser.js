import axios from 'axios';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './NavbarUser.css'
import Banner from '../Banner/Banner';

function BasicExample() {

  let [ testCategory,setTestCategory] = useState([]);
  let [tests,setTests] = useState([

  ])
  
  useEffect(()=>{
    getCats()
    handleCategory("Technical")
  },[])
  const handleCategory=(item)=>{
    axios.get("http://localhost:7000/viewTest/"+item).then((result)=>{
      console.log("test :" + result.data)
      
      setTests(result.data)
    })
  }
  
  const getCats=()=>{
   
    axios.get("http://localhost:7000/testCategory").then((result)=>{
      if(result.data){
        console.log("what:")
          console.log(result.data.exist)
            setTestCategory(result.data.exist)
      }
})
  }
  

  return (
    <div><nav className="navbar navbar-expand-lg navbar-light bg">
    <a className="navbar-brand p-2 text-light" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse text-light" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto text-light">
        <li className="nav-item active">
          <a className="nav-link text-light" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Link</a>
        </li>
        <NavDropdown  title={<span className='text-light'>Test Category</span>} id="basic-nav-dropdown" className='text-light'>
        {testCategory && testCategory.map((category,index)=>(
        <NavDropdown.Item className='' as={Link} key={index} onClick={()=>handleCategory(category.categoryName)}>
              {category.categoryName}
          </NavDropdown.Item>
          
        ))}
        <NavDropdown.Divider />             
          
        </NavDropdown>
        
      </ul>
    
    </div>
  </nav>
  <Banner tests = {tests}/>
  </div>

    
  );
}

export default BasicExample;