// Components
import Item from './Item';
// Styles
import '../stylesheets/ListItem.scss';

function ListItem({ items, toggleComplete, handleDeleteItem }) {

    const renderItem = () => {
        return items.map((item, index) => {
            return (
                <li key={index}>
                    <Item item={item} index={index} toggleComplete={toggleComplete} handleDeleteItem={handleDeleteItem} />
                </li>
            );
        });
    }
    return (

        <div className="containerListItem">
            <ul >{renderItem()}</ul>
        </div>


    );
};

export default ListItem;