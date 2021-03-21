import { Jumbotron } from 'reactstrap';
import './TypingCard.css'

const TypingCard = (props) => {
    return (
        <Jumbotron className="typing-card p-5 m-0 w-100">
            <div className="quote-display lead text-primary" id="quote-display">quote</div>
            <hr/>
            <textarea
                className="quote-input rounded border bg-light"
                id="quote-input"
                autoFocus
                placeholder="start typing..."
                style={{
                    width: "100%"
                }}
            />
        </Jumbotron>
    );
};

export default TypingCard;