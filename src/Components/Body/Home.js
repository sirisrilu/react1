import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import Card from 'react-bootstrap/Card';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShareIcon from '@mui/icons-material/Share';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import StarRateIcon from '@mui/icons-material/StarRate';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart} from '@mui/x-charts/LineChart';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import { Button } from 'react-bootstrap';


const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];
const settings = {
  width: 200,
  height: 200,
  value: 60,
};




function Home(){
  return(
    <div className='manu'>
    < Container className='manu'>
      <Row>
        <Col sm={10}><h1>Dashboard Users</h1></Col>
        <Col sm={2}><h1><DensityMediumIcon/></h1></Col>
        <Card className='two'>
         
        <p>Earnings< AttachMoneyIcon/></p>
       <h1>$628</h1>
        </Card>
        <Card className='three'>
          
        <p>Share<ShareIcon/></p>
        <h1>2434</h1>
        
        </Card>
        <Card className='three'>
        <p>Likes<ThumbUpIcon /></p>
        <h1>1259</h1>
        </Card>
        <Card className='three'>
        <p>Rate<StarRateIcon/></p> 
        <h1>8,9</h1> 
        </Card>
        
      
      </Row>
    </Container>
    <Row>
      <Col sm={8} className='manu' >
        <div style={{backgroundColor:'whitesmoke'}}>
        <p><h1>Result</h1> </p>
      <button class="btn btn-primary" style={{marginLeft:'500px'}}>check now</button>
      <BarChart
      width={800}
      height={300}
      series={[
        { data: pData, label: 'pv', id: 'pvId', stack: 'total' },
        { data: uData, label: 'uv', id: 'uvId', stack: 'total' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />
    </div>
    </Col>
    <Col sm={4} className='manu'>
    <Gauge
  {...settings}
  cornerRadius="50%"
  sx={(theme) => ({
    [`& .${gaugeClasses.valueText}`]: {
      fontSize: 40,
    },
    [`& .${gaugeClasses.valueArc}`]: {
      fill: '#52b202',
    },
    [`& .${gaugeClasses.referenceArc}`]: {
      fill: theme.palette.text.disabled,
    },
  })}
/>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <p>Lorem ipsum</p>
    <Button>check now</Button>

    </Col>
    </Row>
    <Row>
      <Col sm={12} className='manu'>
        <p><h1>Lorem ipsum</h1></p>
        <p>Dolor Amet</p>
      <LineChart
  xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
  series={[
    {
      data: [2, 5.5, 2, 8.5, 1.5, 5],
      area: true,
    },
  ]}
  width={800}
  height={300}
/>


      </Col>
      </Row>
    </div>
    
  )
}
export default Home

