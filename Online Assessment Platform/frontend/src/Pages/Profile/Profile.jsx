import React, { useEffect, useState } from 'react'
import './Profile.scss'
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem
  } from 'mdb-react-ui-kit'
  import 'bootstrap/dist/css/bootstrap.css'
import Sidebar from '../../Components/Sidebar/Sidebar.jsx'
import Navbar from '../../Components/Navbar/Navbar.jsx'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Toast from 'react-bootstrap/Toast'
import Form from 'react-bootstrap/Form';

const Profile = () => {
const [show, setShow] = useState(false);
const handleShow = () => setShow(true);
const handleClose = () => setShow(false);
const [showUpdate,setShowUpdate] = useState(true);
const [showCreate,setShowCreate] = useState(false)
const [validated, setValidated] = useState(false);
const userID = sessionStorage.getItem("userID");
const token = window.sessionStorage.getItem("cookies")
console.log("userID : ",userID);
const [profileDetails,setProfileDetails] = useState({})

console.log(URL.createObjectURL(new Blob([profileDetails.profilePhoto], { type: 'image/jpeg' })))
useEffect(()=>{
    
    axios.get("http://localhost:7000/auth/viewProfile/"+userID,{headers:{"authorization":token}}).
    then((result)=>{
        console.log(result)
        if(result.data[0].firstName=== undefined){
          setShowCreate(true);
          setShowUpdate(false);
        }
        else{
          
          
        }
        setProfileDetails(result.data[0]);
    }).
    catch((err)=>{
        console.log(err)
    })


},[])


const handleSubmit = (event) => {
      
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }
  setValidated(true);
      if(form.checkValidity()===true){
      event.preventDefault();
      //profileDetails.profilePhoto="abc";
      axios.put("http://localhost:7000/auth/updateProfile",profileDetails,{headers:{"authorization":token}}).
      then((result)=>{
        console.log(result);
      }).catch((err)=>{
        console.log(err);
      })
      setShowCreate(false);
      setShowUpdate(true);
      handleClose()
      }
      
}

  return (
    <div className='profile'>
        <Sidebar/>
        <div className='container'>
        <Navbar/>
        <div className='details p-3'>
        <section style={{ backgroundColor: '' }}>
        
      <MDBContainer className="">
      <div className='d-flex justify-content-end'>
      
      { showUpdate&& <Button  className='btn btn-primary' onClick={handleShow}>Update Profile</Button>}
      { showCreate&& <Button className='btn btn-primary'  onClick={handleShow}>Create Profile</Button>}
      </div>
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                src={`data:image/jpeg;base64,${profileDetails.profilePhoto}`}

                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">{profileDetails.position}</p>
                <p className="text-muted mb-4">{profileDetails.city + ", " +profileDetails.country}</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn>Follow</MDBBtn>
                  <MDBBtn outline className="ms-1">Message</MDBBtn>
  </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="globe fa-lg text-warning" />
                    <MDBCardText>https://mdbootstrap.com</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                    <MDBCardText>@mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Fullname</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{profileDetails.firstName +" "+ profileDetails.lastName}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{profileDetails.email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{profileDetails.Mobile}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Position</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{profileDetails.position}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{profileDetails.city + ", " +profileDetails.country}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                
                  <MDBCol sm="3">
                    <MDBCardText>College</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{profileDetails.school}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formFirstname" >
          <Form.Label></Form.Label>
          <Form.Control type="string" defaultValue={profileDetails.firstName} placeholder="Enter First Name" onKeyUp={(e)=>{
            profileDetails.firstName = e.target.value
          }} pattern="^[a-zA-Z\s]+$" required />
          <Form.Control.Feedback type="invalid">
        Please enter a valid firstname (alphabetic characters only).
      </Form.Control.Feedback>
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLastname" >
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" defaultValue={profileDetails.lastName} placeholder="Enter Last Name" onKeyUp={(e)=>{
            profileDetails.lastName = e.target.value
          }} pattern='^[a-zA-Z\s]+$' required />
          <Form.Control.Feedback type="invalid">
            Please enter a valid lastname (alphabetic characters only).
        </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMobile" >
          <Form.Label>Mobile</Form.Label>
          <Form.Control type="text" defaultValue={profileDetails.Mobile} placeholder="Enter Mobile " onKeyUp={(e)=>{
            profileDetails.Mobile = e.target.value
          }} pattern='^[0-9]+$' required />
          <Form.Control.Feedback type="invalid">
            Please enter a valid Mobile Number (Numeric characters only).
        </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPosition" >
          <Form.Label>Position</Form.Label>
          <Form.Control type="text" defaultValue={profileDetails.position} placeholder="Enter Position" onKeyUp={(e)=>{
            profileDetails.position = e.target.value
          }} pattern='^[a-zA-Z\s]+$' required />
          <Form.Control.Feedback type="invalid">
            Please enter a valid Position (alphabetic characters only).
        </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formCollege" >
          <Form.Label>College</Form.Label>
          <Form.Control type="text" defaultValue={profileDetails.school} placeholder="Enter College Name" onKeyUp={(e)=>{
            profileDetails.school = e.target.value
          }} pattern='^[a-zA-Z\s]+$' required />
          <Form.Control.Feedback type="invalid">
            Please enter a valid School (alphabetic characters only).
        </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCountry" >
          <Form.Label>Country</Form.Label>
          <Form.Control type="text" defaultValue={profileDetails.country} placeholder="Enter Country Name" onKeyUp={(e)=>{
            profileDetails.country = e.target.value
          }} pattern='^[a-zA-Z\s]+$' required />
          <Form.Control.Feedback type="invalid">
            Please enter a valid Country Name (alphabetic characters only).
        </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCity" >
          <Form.Label>City</Form.Label>
          <Form.Control type="text" defaultValue={profileDetails.city} placeholder="Enter City" onKeyUp={(e)=>{
            profileDetails.city = e.target.value;
          }} pattern='^[a-zA-Z\s]+$' required />
          <Form.Control.Feedback type="invalid">
            Please enter a valid City Name (alphabetic characters only).
        </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImage" >
          <Form.Label>Profile Picture</Form.Label>
          <Form.Control type="file" required onChange={(e)=>{
            const file = e.target.files[0]
            if(file){
              const reader = new FileReader();
              reader.readAsDataURL(file)
              reader.onloadend=()=>{
                //profileDetails.profilePhoto = reader.result;
                const test = reader.result.split(",")
                console.log(test[1])
                profileDetails.profilePhoto = test[1];
              }
            }
            console.log(file);
          }}/>
          <Form.Control.Feedback type="invalid">
            Please upload a jpg file.
        </Form.Control.Feedback>
        </Form.Group>
          
          <Button variant="primary" type="submit" className='mt-3'>
          Submit
        </Button>
        
          </Form>
          </Modal.Body>
        
      </Modal>
    </section>
            </div>
        </div>
    
    </div>
  )
}

export default Profile