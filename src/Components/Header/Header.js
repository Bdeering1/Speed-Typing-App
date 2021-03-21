import { Container } from 'reactstrap';

const Header = (props) => {
    return (
        <header>
            <Container fluid className="bg-light border-bottom">
                <h1 className="display-1 text-center">Speed Typing</h1>
                <h2 className="text-muted text-center">By Bryn Deering</h2>
            </Container>
        </header>
    );
};

export default Header;