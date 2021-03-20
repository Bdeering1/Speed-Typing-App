import React from 'react';

export default class SpeedTyping extends React.Component {
    constructor(props) {
      super(props);
      this.state = {

      };
    }
    render() {
      return (
          <div>
            <p>this is my app</p>
            <div className="timer" id="timer">0</div>
            <div className="container">
                <div className="quote-display" id="quote-display">quote</div>
                <textarea class="quote-input" id="quote-input" autofocus>quote input</textarea>
            </div>
          </div>
      );
    }
  }