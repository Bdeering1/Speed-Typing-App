import React from 'react'
import { Container } from 'reactstrap';
import './Timer.css'

export default class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          time: "0:00"
      };
    }
    render() {
      return (
        <Container className="timer text-center" id="timer">
          {this.state.time}
        </Container>
      );
    }
  }