import React from 'react';
import './Questions.scss';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState,useEffect } from 'react';
import Toast from 'react-bootstrap/Toast'
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const Questions = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [validated, setValidated] = useState(false);
    const handleShow = () => setShow(true);
    const [questions , setQuestions] = useState([])
    const [question,setQuestion]=useState({})
    const [showToast, setShowToast] = useState(false);
    const [showSubmitToast , setShowSubmitToast] = useState(false);
    const [showSubmit , setShowSubmit] = useState(false)
    console.log()

    useEffect(()=>{
      const data = {
        testId:window.location.pathname.split('/').pop(),

      }
      console.log(window.sessionStorage.getItem("cookies"))
      axios.get("http://localhost:7000/auth/viewQuestionBytestId",data,{headers:{"authorization":window.sessionStorage.getItem("cookies")}}).
      then((result)=>{
        console.log(result)
      }).
      catch((err)=>{
        console.log(err)
      })
    })


    const handleSubmit = (event) => {
      
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      
      setValidated(true);
      if(form.checkValidity()===true){
      event.preventDefault();
      question.id=questions.length+1
      question.checked=true
            
      setQuestions([...questions,question])
      setQuestion({})
      setShowToast(true)
      handleClose()
      }
    };
    function isNumberKey(evt){
      var charCode = (evt.which) ? evt.which : evt.keyCode
      return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }
    const handleChange = (e,id)=>{
      
      
      const updatedQuestions = [...questions]
      const findID = updatedQuestions.find(f=>
        f.id === id
      )
      console.log(updatedQuestions)
      findID.checked = e.target.checked
      setQuestions(updatedQuestions)
      container()
    }
   
    function updateValue(e,i){
      
        if(i===1){
            question['problemName'] = e.target.value;
        }
        if(i===2){
            question['maxScore'] = e.target.value;
        }
        if(i===3){
            question['duration'] = e.target.value;
        }
        if(i===4){
            question["type"]=e.target.value;
        }
        
        console.log(question);
        //setQuestion(question);
    
    }
 
    function container(){
      console.log('called...',questions);
      return (questions.map((value, index) => (
        <div className="card mb-3 ">
        
            <div className="card-body">
                <div className="form-check d-flex flex-row question">
                  
                    <div className='question'>
                        <input className="form-check-input" type="checkbox" id="flexCheckDefault" checked={value.checked} data-name={value.checked} onClick={($event)=>{handleChange($event,value.id)}}/>
                        <div className='d-flex flex-column'>
                        <h5 className='card-title'>Question {index+1} : </h5>
                            <div><p className='card-text bold'>Question name: <span className='light'>{value.problemName}</span></p></div>
                            <div className='d-flex flex-row justify-content-between w-100'>
                                <div><p className='card-text bold'>Type: <span className='light'>{value.type}</span></p></div>
                                <div><p className='card-text bold'>Score: <span className='light'>{value.maxScore}</span></p></div>
                                <div><p className='card-text bold'>Duration: <span className='light'>{value.duration}mins</span></p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )))
    }

  return (
    <div className='questions'>
      <Sidebar />
      <div className='container'>
        <Navbar />
        <div className='navs'>
          <ul className="nav">
            
            <li className="nav-item">
                <a className='nav-link' role='button' variant="primary" onClick={handleShow}>Add Questions</a>
            </li>
          </ul>
          
        </div>
        
        {
          container()
        }
      <div style={{position:'fixed',top:'20px',right:'20px',zIndex:'9999'}} >  
        <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small></small>
          </Toast.Header>
          <Toast.Body>Question Added to the test</Toast.Body>
        </Toast>
      </div>
      <div style={{position:'fixed',top:'20px',right:'20px',zIndex:'9999'}} >  
        <Toast onClose={() => setShowSubmitToast(false)} show={showSubmitToast} delay={3000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small></small>
          </Toast.Header>
          <Toast.Body>Questions Added to the backend</Toast.Body>
        </Toast>
      </div>
      <div className='d-flex justify-content-center'>
           { questions.length >0 && ( <button className='btn btn-primary' onClick={()=>{
              console.log(questions)
              const verifiedQuestions = questions.filter(
                item=>item.checked === true
              )
            console.log(verifiedQuestions);
            let data={
              testId:window.location.pathname.split('/').pop(),
              sectionList:verifiedQuestions
            }
            axios.post(`http://localhost:7000/auth/createQuestion`,data,{headers:{"authorization":window.sessionStorage.getItem("cookies")}}).
            then((result)=>{
              console.log(result);
              setShowSubmitToast(true)
            })
            }}>Submit</button>) }
      </div>
      
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Question</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formQuestionName">
          <Form.Label>Problem Name</Form.Label>
          <Form.Control type="string"  placeholder="Enter Problem Name" onKeyUp={(e)=>updateValue(e,1)} pattern="^[a-zA-Z0-9\s]+$" required />
          <Form.Control.Feedback type="invalid">
        Please enter a valid problem name (alphanumeric characters only).
      </Form.Control.Feedback>
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formScore" >
          <Form.Label>Max Score</Form.Label>
          <Form.Control type="text" placeholder="Enter Max score" onKeyUp={(e)=>updateValue(e,2)} pattern='^[0-9]+$' required />
          <Form.Control.Feedback type="invalid">
        Please enter a valid Max score (numeric only).
      </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDuration">
          <Form.Label>Duration</Form.Label>
          <input placeholder="Enter Duration(mins)" onKeyUp={(e)=>updateValue(e,3)} type="text" className='form-control' required pattern='^[0-9]+$'/>
        
          <Form.Control.Feedback type="invalid">
        Please enter a valid Duration (numeric only).
      </Form.Control.Feedback>

          </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Type</Form.Label>
            <Form.Select onChange={(e)=>updateValue(e,4)} required>
                <option disabled>Select any option</option>
                <option value="Technical">Technical</option>
                <option value="Non Technical">Non Technical</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
        Please Select type.
      </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
        <Form.Label>
          Problem Description : 
        </Form.Label>
        <Form.Control as="textarea" rows={3} cols={5} />
        
        </Form.Group>
          
          <Button variant="primary" type="submit" className='mt-3'>
          Submit
        </Button>
        
          </Form>
          </Modal.Body>
        
      </Modal>
        
    </div>
      </div>
      
  );
}

export default Questions;
