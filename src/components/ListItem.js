// Components
import Item from './Item';
// Styles
import '../stylesheets/ListItem.scss';

function ListItem({ items, toggleComplete, handleDeleteItem, handleIncrease, handleDecrement }) {

    const renderItem = () => {
        return items.map((item, index) => {
            return (
                <li key={index}>
                    <Item item={item} index={index} toggleComplete={toggleComplete} handleDeleteItem={handleDeleteItem} handleIncrease={handleIncrease} handleDecrement={handleDecrement} />
                </li>
            );
        });
    }
    return (

        <div className="containerListItem">
            <ul >{renderItem()}</ul>
            <div className="containerListItem__total">Total different items: {items.length}</div>
        </div>


    );
};

export default ListItem;