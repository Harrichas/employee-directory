import React from "react";
import Col from "./components/Col";
import Container from "./components/Container";
import Wrapper from "./components/Wrapper";
import Table from "./components/Table";

function App() {
  return (
    
      <div>
        <Wrapper>
          <Container>
            <Col size= "12">
              <Table/>              
            </Col>
          </Container>
        </Wrapper>
      </div>
  );
}

export default App;
