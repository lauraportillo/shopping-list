// Components
import Item from './Item';
// Styles
import '../stylesheets/ListItem.scss';

function ListItem({ items }) {

    const renderItem = () => {
        return items.map((item, index) => {
            return (
                <li key={index}>
                    <Item item={item} />
                </li>
            );
        });
    }
    return (
        <div >
            <ul className="pokeList">{renderItem()}</ul>
        </div>
    );
};

export default ListItem;