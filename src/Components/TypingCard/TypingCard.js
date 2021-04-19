import React from 'react';
import { Jumbotron } from 'reactstrap';
import './TypingCard.css'

import getNextQuote from '../../Utilities/quote.js';


export default class TypingCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            quoteChars: [],
            loaded: false
        };
        this.renderNewQuote = this.renderNewQuote.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.renderNewQuote();
    }

    async renderNewQuote() {
        let quote = await getNextQuote();
        let quoteChars = quote.split('').map((char, idx) => ({
            key: idx,
            val: char,
            class: 'def'
        }))
        this.setState({
            quoteChars: [...quoteChars],
            input: '',
            loaded: true
        })
    }

    handleChange(event) {
        let input = event.target.value;
        let inputChars = input.split('');
        let newQuoteChars = [...this.state.quoteChars];
        let allCorrect = true;
        newQuoteChars.forEach((char, idx) => {
            let charObj = {...newQuoteChars[idx]};
            if (inputChars[idx] == null) {
                charObj.class = 'def';
                allCorrect = false;
            }
            else if (char.val === inputChars[idx]) {
                charObj.class = 'correct';
            }
            else {
                charObj.class = 'incorrect';
                allCorrect = false;
            }
            newQuoteChars[idx] = charObj;
        })
        this.setState({
            input,
            quoteChars: newQuoteChars
        })
        if (allCorrect) {
            this.renderNewQuote();
            this.resetTimer();
        }
    }

    resetTimer() {

    }

    render() {
        return (
            <Jumbotron className="typing-card w-100 px-4 py-5 m-0">
                <div className="quote-display px-2 lead text-primary" id="quote-display">
                    {this.state.quoteChars.map(charObj => (
                        <span className={charObj.class} key={charObj.key}>{charObj.val}</span>
                    ))}
                </div>
                <hr/>
                <textarea
                    className="quote-input w-100 p-2 lead rounded border bg-transparent"
                    id="quote-input"
                    onChange={this.handleChange}
                    placeholder="start typing..."
                    value={this.state.input}
                    autoFocus
                />
            </Jumbotron>
        );
    }
};