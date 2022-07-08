// Components
import ItemPrinted from './ItemPrinted';
// Styles
import '../stylesheets/ListPrinted.scss';

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

        <div ref={referent}>
            <ul >{renderItem()}</ul>
        </div>

    );
}

export default ListPrinted;