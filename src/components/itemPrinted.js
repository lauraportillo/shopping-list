// Styles
import '../stylesheets/ItemPrinted.scss';

function ItemPrinted({ item }) {
    return (
        <div className="containerItemPrinted">

            <p className="containerItemPrinted__quantity"> {item.quantity} </p>
            <p className="containerItemPrinted__name"> {item.itemName} </p>

        </div>
    )
}

export default ItemPrinted;