// Components
import Item from './Item';
// Styles
import '../stylesheets/ListItem.scss';

function ListItem({ items, toggleComplete }) {

    const renderItem = () => {
        return items.map((item, index) => {
            return (
                <li key={index}>
                    <Item item={item} index={index} toggleComplete={toggleComplete} />
                </li>
            );
        });
    }
    return (
        <ul className="containerListItem">{renderItem()}</ul>
    );
};

export default ListItem;