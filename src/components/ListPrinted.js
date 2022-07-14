// Components
import CurrentDate from './CurrentDate';
import ItemPrinted from './ItemPrinted';
import HeaderPrinted from './HeaderPrinted'
// Styles
import '../stylesheets/ListPrinted.scss';
;

function ListPrinted({ referent, items }) {

    const renderItem = () => {
        return items.map((item, index) => {
            return (
                <li key={index}>
                    <ItemPrinted item={item} index={index} />
                </li>
            );
        });
    }
    return (

        <div ref={referent} className="containerListItemPrinted">
            <HeaderPrinted />
            <main>
            <ul className="containerListItemPrinted__list">{renderItem()}</ul>
                <div className="containerListItemPrinted__total">Total different items: {items.length}</div>
            </main>
            <footer className="containerListItemPrinted__footer">
                <p className="containerListItemPrinted__footer--text">Printed on</p>
                <CurrentDate /> 
            </footer>
        </div>

    );
}

export default ListPrinted;