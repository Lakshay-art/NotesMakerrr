import React from 'react';
import { Container, CardGroup, Card, Row, Col } from 'react-bootstrap';



const Note = (props) => {
  return (

    <span>
      <Container fluid >

        <CardGroup className="m-5 d-block ">

          <Card key={props.note.id} className="m-2 border-0 shadow halfb" style={{
            // backgroundColor: '#ffffff',
            borderRadius: 45,
            padding: '4rem'
          }}>
            <Row>
              <Col>
                <Card.Img src={props.note.img} alt='' style={{
                  objectFit: 'cover',
                  borderRadius: 45
                }} />
              </Col></Row>
            <Row>
              <Col>
                <Card.Body>
                  <Card.Title as="h1" style={{ color: "rgb(45, 102, 173)" }}>{props.note.title}</Card.Title>
                  <Card.Text as="h4" dangerouslySetInnerHTML={{ '__html': props.note.description }}></Card.Text>


                </Card.Body>
              </Col>
            </Row>
          </Card>

        </CardGroup>
      </Container>
    </span>



  );

}


export default Note;

