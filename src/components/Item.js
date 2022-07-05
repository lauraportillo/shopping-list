// React
import { useCounter } from '../hooks/useCounter';
import { IconSquareCheck, IconSquare, IconTrash } from '@tabler/icons';
// Styles
import '../stylesheets/Item.scss';

function Item({ item, index, toggleComplete, handleDeleteItem }) {
    const { counter, increase, decrement } = useCounter(1);

    return (
        <div className="containerItem">

            <div onClick={() => toggleComplete(index)} className="containerItemLeft">
                {item.isSelected ? (
                    <>
                        <span className="containerItemLeft__icon"><IconSquareCheck color="#54585a" size={20} /></span>
                        <p className="containerItemLeft__name" >{item.itemName}</p>

                    </>
                ) : (
                        <>
                            <span className="containerItemLeft__icon"><IconSquare color="#54585a" size={20} /></span>
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
                    <IconTrash color="#54585a" size={20} stroke={1.5} />
            </button>

            </div>



        </div>
    )
}

export default Item;