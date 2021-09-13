import { Jumbotron, Container } from 'react-bootstrap';

const SecondTask = () => {

  return (

    <Jumbotron style={{
      borderRadius: "40px", padding: "5px", width: "50%", color: "#2D66AD",
      position: "relative",
      left: "25%",
      visibility: "hidden"
    }}>
      <Container>
        <h3 class="display-4" style={{ textAlign: "center" }}>Take Notes</h3>
        <p class="lead"></p>
      </Container>
    </Jumbotron>
  );
}
export default SecondTask;