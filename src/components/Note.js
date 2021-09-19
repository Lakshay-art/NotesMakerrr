import React from "react";
import { Container, CardGroup, Card, Row, Col } from "react-bootstrap";

const Note = (props) => {
  return (
    <span>
      <div className="m-5 p-2 bl">
        <Card
          key={props.note.id}
          className="m-2 border-0 shadow halfb"
          style={{
            // backgroundColor: '#ffffff',
            borderRadius: 45,
            padding: "4rem",
          }}
        >
          <Row>
            <Col>
              <Card.Img
                src={props.note.img}
                alt=""
                style={{
                  objectFit: "cover",
                  borderRadius: 45,
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Card.Body>
                <Card.Title as="h3" style={{ color: "rgb(45, 102, 173)" }}>
                  {props.note.title}
                </Card.Title>
                <Card.Text
                  as="h4"
                  dangerouslySetInnerHTML={{ __html: props.note.description }}
                ></Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </div>
    </span>
  );
};

export default Note;
