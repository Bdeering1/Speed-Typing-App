import { Jumbotron } from 'reactstrap';
import './TypingCard.css'

const TypingCard = (props) => {
    return (
        <Jumbotron className="typing-card w-100 px-4 py-5 m-0">
            <div className="quote-display px-2 lead text-primary" id="quote-display">{props.quote}</div>
            <hr/>
            <textarea
                className="quote-input w-100 p-2 lead rounded border bg-transparent"
                id="quote-input"
                autoFocus
                placeholder="start typing..."
            />
        </Jumbotron>
    );
};

export default TypingCard;