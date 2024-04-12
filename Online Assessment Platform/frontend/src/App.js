import React from 'react'
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import {Routes,BrowserRouter, Route, Navigate} from 'react-router-dom'
import Page from './Pages/1stpage';
import Home from './Pages/home/Home';
import List from './Pages/list/List';
import Single from './Pages/Questions/Questions'
import New from './Pages/new/New'
import TestLibrary from './Pages/TestLibrary/TestLibrary';
import TestManagement from '../src/Pages/TestManagement/TestManagement'
import Results from './Pages/Results/Results';
import Questions from './Pages/Questions/Questions';
import Profile from './Pages/Profile/Profile';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<Navigate to="/login"/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/dashboard' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>} /> 
          <Route path='/page' element={<Page/>} />
          
          <Route path='/testlibrary' >
            <Route index element={<TestLibrary/>} />
            <Route path='/testlibrary/questions/:testID' element={<Questions/>}/>
          </Route>
          <Route path='/testmanagement' element={<TestManagement/>}/>
          <Route path='/results' element={<Results/>} />
          <Route path='/users'>
                  <Route index element={<List/>}/>
                  <Route path=':userID' element={<Single/>}/>
                  <Route path='new' element={<New/>}/>

            </Route>
            <Route path='/products'>
                  <Route index element={<List/>}/>
                  <Route path=':productID' element={<Single/>}/>
                  <Route path='new' element={<New/>}/>

            </Route>
            <Route path='/profile' element={<Profile/>} />
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
