import React from 'react'
import { Container } from 'reactstrap';
import './Timer.css'

export default class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          time: 0
      };
      this.resetTimer = this.resetTimer.bind(this);
      this.getTime = this.getTime.bind(this);
      this.secInterval = null;
    }

    componentDidMount() {
      this.resetTimer();
    }

    getTime() {
      return this.state.time;;
    }

    resetTimer() {
      this.setState({
        time: 0
      })
      let startTime = new Date();
      if (this.secInterval != null)
        clearInterval(this.secInterval);
      this.secInterval = setInterval(() => {
        let currentTime = Math.floor((new Date() - startTime) / 1000); //ensure time is accurate
        this.setState({
          time: currentTime
        });
      }, 1000);
    }

    render() {
      return (
        <Container id="timer" className="timer text-center">
          {this.state.time}
        </Container>
      );
    }
  }