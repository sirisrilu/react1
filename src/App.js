import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import'./App.css'
import Sidenavbar from './Components/Body/Sidenavbar';
import Home from './Components/Body/Home';
import messages from'./Components/Body/messages';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import file from'./Components/Body/file';
import notifications from'./Components/Body/notifications';
import location from'./Components/Body/location';
import graphs from'./Components/Body/graphs';


function App(){
  return(
    <div>
      <Router>
      <Row>
        <Col sm={2} className='one'>
       <Sidenavbar/>



        </Col>

        <Col sm={10} style={{backgroundColor:'white'}}>
        <Routes>
         <Route path='/' exact Component={Home}/>
       
          <Route path='/messages'exact Component={messages}/>
          <Route path='/file'exact Component={file}/>
          <Route path='/notifications'exact Component={notifications}/>
          <Route path='/location'exact Component={location}/>
          <Route path='/graphs'exact Component={graphs}/>
        </Routes>
        </Col>
      </Row>
      </Router>
      
    </div>
  )
}

export default App

