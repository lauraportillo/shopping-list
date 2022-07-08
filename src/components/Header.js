// Components
import Watermelon from './Watermelon';
// Styles
import '../stylesheets/Header.scss';

function Header() {
    return (
        <header className="containerHeader">
            <h1 className="containerHeader__title">shopping</h1>
            <h2 className="containerHeader__subtitle">and eat healthy!</h2>
            <Watermelon />
        </header>
    )
}

export default Header;