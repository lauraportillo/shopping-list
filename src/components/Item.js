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

            <div onClick={() => toggleComplete(index)} className="containerItemLeft">
                {item.isSelected ? (
                    <>
                        <IconSquareCheck color="#54585a" size={20} />
                        <p className="containerItemLeft__name" >{item.itemName}</p>

                    </>
                ) : (
                        <>
                            <IconSquare color="#54585a" size={20} />
                            <p className="containerItemLeft__name">{item.itemName}</p>
                        </>
                )}
            </div>

            <div className="containerItemRight">
                <div className="containerItemRight__counter" >
                    <button onClick={decrement} className="containerItemRight__counter--btnL">
                    -
                </button>
                <span> {counter} </span>

                    <button onClick={increase} className="containerItemRight__counter--btnR">
                    +
                </button>
            </div>

                <button className="containerItemRight__deleteBtn" onClick={() => handleDeleteItem(index)}>
                    <i className="far fa-trash-alt containerItemRight__deleteBtn--icon"></i>
            </button>

            </div>



        </div>
    )
}

export default Item;