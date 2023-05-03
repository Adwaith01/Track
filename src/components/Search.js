
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner'
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from 'react';


function Search({value}) {


  return (
    <Container>
      <Row >
    
<Col>
{value.map(x=> x.name)}
</Col>
      </Row>
    </Container>
  );
}





 export default Search;