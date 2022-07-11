// Components
import CurrentDate from './CurrentDate';
import ItemPrinted from './ItemPrinted';
import Header from './Header'
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
            <Header />
            <ul className="containerListItemPrinted__list">{renderItem()}</ul>
            <CurrentDate />
        </div>

    );
}

export default ListPrinted;