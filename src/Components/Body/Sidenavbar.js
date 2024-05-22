import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import Row from'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import {Container} from '@mui/material';


function Sidenavbar() {
  return (
    <Container>
     <Row>
        <Col>
        <p><center><div><AccountCircleIcon style={{fontSize:'100px'}}/></div></center><h1>JOHNDON</h1><center>johndon@company.com</center></p>
        <Link to='/'><p><HomeIcon/> Home</p></Link>
       <Link to='/file'><p><FolderIcon />file </p></Link>
       <Link to='/messages'> <p><MessageIcon />messages </p></Link>
       <Link to='/notifications'><p>< NotificationsIcon/>notification </p></Link>
       <Link to='/location'><p>< LocationOnIcon />location</p></Link>
        <Link to='/graph'><p><DataUsageIcon />graph </p></Link>
        
        </Col>
     </Row>
    </Container>




  )
}

export default Sidenavbar