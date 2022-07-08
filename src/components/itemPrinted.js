// Styles
import '../stylesheets/ItemPrinted.scss';

function ItemPrinted({ item, index }) {
    return (
        <div className="containerItemPrinted">

            <span> {item.quantity} </span>
            <p  >{item.itemName}</p>

        </div>
    )
}

export default ItemPrinted;