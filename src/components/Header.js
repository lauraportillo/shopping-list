// Components
import Watermelon1 from './Watermelon1';
import Watermelon2 from './Watermelon2';
import Watermelon3 from './Watermelon3';
// Styles
import '../stylesheets/Header.scss';

function Header() {
    return (
        <header className="containerHeader">
            <section className="containerHeader__watermelons">
                <Watermelon1 />
                <Watermelon2 />
                <Watermelon3 />
            </section>

            <h1 className="containerHeader__title">shopping</h1>
            <h2 className="containerHeader__subtitle">and eat healthy!</h2>
        </header>
    )
}

export default Header;