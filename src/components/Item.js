// React
import { useCounter } from '../hooks/useCounter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
// Styles
import '../stylesheets/Item.scss';

function Item({ item, index, toggleComplete }) {
    const { counter, increase, decrement, reset } = useCounter(1);


    return (
        <div className="containerItem">

            <div onClick={() => toggleComplete(index)} >
                {item.isSelected ? (
                    <>
                        <FontAwesomeIcon icon={faCheckCircle} />
                        <span >{item.itemName}</span>
                    </>
                ) : (
                    <>
                        <FontAwesomeIcon icon={faCircle} />
                        <span>{item.itemName}</span>
                    </>
                )}
            </div>
            <div >
                <button onClick={decrement}>
                    -
                </button>
                <span> {counter} </span>

                <button onClick={increase}>
                    +
                </button>
            </div>

        </div>
    )
}

export default Item;