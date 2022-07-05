// React
import { useCounter } from '../hooks/useCounter';
import { IconSquare } from '@tabler/icons';
import { IconSquareCheck } from '@tabler/icons';
// Styles
import '../stylesheets/Item.scss';

function Item({ item, index, toggleComplete, handleDeleteItem }) {
    const { counter, increase, decrement } = useCounter(1);

    return (
        <div className="containerItem">

            <div onClick={() => toggleComplete(index)} className="containerItem__item">
                {item.isSelected ? (
                    <>
                        <IconSquareCheck color="#54585a" />
                        <p className="containerItem__item--name" >{item.itemName}</p>

                    </>
                ) : (
                    <>
                            <IconSquare color="#54585a" />
                            <p className="containerItem__item--name">{item.itemName}</p>
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