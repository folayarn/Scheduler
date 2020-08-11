import React from 'react'
import {Spinner} from 'react-bootstrap'
import {Container,Row,Col} from 'react-bootstrap'

const Loading=()=>{




    return(
<div>
<Container>
<Col  style={{marginTop:'200px'}}>
<Row>
<Col></Col>
<Col>
<Spinner animation="border" size="lg" role="status">
</Spinner>
<b style={{marginLeft:"10px"}}>Please Wait...</b>
</Col>
<Col></Col>
</Row>
</Col>
</Container>
</div>



    )



}
export default Loading
