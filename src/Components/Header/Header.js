import { Container } from 'reactstrap';
import './Header.css'

const Header = (props) => {
    return (
        <header>
            <Container fluid className="bg-light" style={{display: props.disp ? "" : "none"}}>
                <h1 className="display-2 text-center" id="title">Speed Typing</h1>
                <h2 className="text-muted text-center m-0 pb-2" id="sub-title">By Bryn Deering</h2>
            </Container>
        </header>
    );
};

export default Header;