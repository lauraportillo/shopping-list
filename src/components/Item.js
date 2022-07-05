// React
import { useCounter } from '../hooks/useCounter';
// import { IconPrinter } from '@tabler/icons';

// Styles
import '../stylesheets/Item.scss';

function Item({ item, index, toggleComplete, handleDeleteItem }) {
    const { counter, increase, decrement } = useCounter(1);

    return (
        <div className="containerItem">

            <div onClick={() => toggleComplete(index)} className="containerItem__item">
                {item.isSelected ? (
                    <>
                        <i className="fa fa-check-circle containerItem__item--icon" aria-hidden="true"></i>
                        <span className="containerItem__item--name" >{item.itemName}</span>
                    </>
                ) : (
                    <>
                            <i className="fa fa-circle containerItem__item--icon" aria-hidden="true"></i>
                            <span className="containerItem__item--name">{item.itemName}</span>
                    </>
                )}
            </div>
            <div className="containerItem__counter" >
                <button onClick={decrement} className="containerItem__counter--btnL">
                    -
                </button>
                <span> {counter} </span>

                <button onClick={increase} className="containerItem__counter--btnR">
                    +
                </button>
            </div>

            <button className="containerItem__deleteBtn" onClick={() => handleDeleteItem(index)}>
                <i className="far fa-trash-alt containerItem__deleteBtn--icon"></i>
            </button>

        </div>
    )
}

export default Item;