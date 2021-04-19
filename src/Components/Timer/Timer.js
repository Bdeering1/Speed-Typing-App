import React from 'react'
import { Container } from 'reactstrap';
import './Timer.css'

export default class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          time: 0
      };
      this.startTimer = this.startTimer.bind(this);
    }

    componentDidMount() {
      this.startTimer();
    }

    startTimer() {
      this.setState({
        time: 0
      })
      let startTime = new Date();
      setInterval(() => {
        let currentTime = Math.floor((new Date() - startTime) / 1000); //ensure time is accurate
        this.setState({
          time: currentTime
        });
      }, 1000)
    }

    render() {
      return (
        <Container className="timer text-center" id="timer">
          {this.state.time}
        </Container>
      );
    }
  }