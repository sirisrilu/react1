import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BarChart } from '@mui/x-charts/BarChart';

 function graphs() {
    return (
        <Container>
            <Row>
                <Col sm={6}>
                <BarChart
        xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
        series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
        width={500}
        height={300}
      />
    
  
                </Col>
            </Row>
        </Container>
    );
}
      
    
export default graphs