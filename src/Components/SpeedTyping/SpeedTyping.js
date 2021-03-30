import React from 'react';
import { Container, Col } from 'reactstrap';
import Header from '../Header/Header'
import TypingCard from '../TypingCard/TypingCard';
import Timer from '../Timer/Timer'
import blueIcon from '../../Resources/light blue icon.png'
import './SpeedTyping.css';

import getNextQuote from '../../Utilities/quote.js';

export default class SpeedTyping extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        quote: '',
        vh: window.innerHeight / 100,
        showTitle: true
      };
      this.mainRef = React.createRef();
      this.handleResize = this.handleResize.bind(this);
      this.getQuote = this.getQuote.bind(this);
    }

    componentDidMount() {
      this.getQuote();
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
    }
    componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
    }

    async getQuote() {
      let quote = await getNextQuote();
      this.setState({
        quote
      })
    }

    handleResize() {
      this.setState({
        vh: window.innerHeight / 100
      });
      this.setState({ //showTitle is updated separately main can re-render before checking overflow
        showTitle: this.checkOverflow(this.mainRef.current) ? false : true
      });
    }

    checkOverflow(el) { //https://stackoverflow.com/questions/143815/determine-if-an-html-elements-content-overflows
      let curOverflow = el.style.overflow;
      if ( !curOverflow || curOverflow === "visible" )
        el.style.overflow = "hidden";
      let isOverflowing = el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight;
      el.style.overflow = curOverflow;
      return isOverflowing;
    }

    render() {
      return (
        <Container fluid
          className="p-0"
          style={{
            height: 100 * this.state.vh
          }}
        >
          <Header disp={this.state.showTitle}/>
          <main
            ref={this.mainRef}
            className="mt-md-4"
            style={{
              height: this.state.showTitle ? 100 * this.state.vh - 92 : 100 * this.state.vh
            }}
          >
            <Container className="typing-area h-100 p-md-4 d-flex justify-content-center rounded bg-md-light">
              <img className="position-absolute d-none d-md-block" src={blueIcon} alt="keyboard icon" style={{width: "100px", height: "100px"}}/>
              <Col className="banner d-none d-lg-block rounded bg-primary"></Col>
              <Col className="my-auto p-5" xs="12" lg="9">
                <TypingCard quote={this.state.quote}/>
                <Timer />
              </Col>
              <Col className="banner d-none d-lg-block rounded bg-primary"></Col>
            </Container>
          </main>
        </Container>
      );
    }
  }