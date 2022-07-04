// React
import { useCounter } from '../hooks/useCounter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
// Styles
import '../stylesheets/Item.scss';

function Item({ item, index, toggleComplete, handleDeleteItem }) {
    const { counter, increase, decrement } = useCounter(1);

    return (
        <div className="containerItem">

            <div onClick={() => toggleComplete(index)} className="containerItem__item">
                {item.isSelected ? (
                    <>
                        <FontAwesomeIcon icon={faCheckCircle} />
                        <span className="containerItem__item--name" >{item.itemName}</span>
                    </>
                ) : (
                    <>
                        <FontAwesomeIcon icon={faCircle} />
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