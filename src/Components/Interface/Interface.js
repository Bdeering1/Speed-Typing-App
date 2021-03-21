import React from 'react';
import { Container, Col } from 'reactstrap';
import Header from '../Header/Header'
import TypingCard from '../TypingCard/TypingCard';
import Timer from '../Timer/Timer'
import blueIcon from '../../Resources/light blue icon.png'
import './Interface.css';

export default class SpeedTyping extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        vh: window.innerHeight / 100
      };
      this.setInnerHeight = this.setInnerHeight.bind(this);
    }

    componentDidMount() {
      window.addEventListener('resize', this.setInnerHeight);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.setInnerHeight);
    }

    setInnerHeight() {
      this.setState({
        vh: window.innerHeight / 100
      })
    }

    render() {
      return (
        <Container fluid
          className="p-0"
          style={{
            height: 100 * this.state.vh || "100vh"
          }}
        >
          <Header />
          <main className="h-75">
            <Container className="interface d-flex justify-content-center rounded mt-4 bg-light border p-5 h-100">
              <img className="position-absolute" src={blueIcon} alt="keyboard icon" style={{width: "100px", height: "100px"}}/>
              <Col className="banner rounded bg-primary"></Col>
              <Col className="my-auto m-5" lg="7">
                <TypingCard />
                <Timer />
              </Col>
              <Col className="banner rounded bg-primary"></Col>
            </Container>
          </main>
        </Container>
      );
    }
  }