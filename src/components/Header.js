// Components
import Watermelons from './Watermelons';
// Styles
import '../stylesheets/Header.scss';

function Header() {
    return (
        <header className="containerHeader">
            <Watermelons />
            <section className="containerHeader__title">
                <h1 className="containerHeader__title--title">shopping</h1>
                <h2 className="containerHeader__title--subtitle">and eat healthy!</h2>
            </section>


        </header>
    )
}

export default Header;