// React
import { useCounter } from '../hooks/useCounter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
// Styles
import '../stylesheets/Item.scss';

function Item({ item }) {
    const { counter, increase, decrement, reset } = useCounter(1);

    return (
        <div className="containerItem">

            <div  >
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
                    {/* <FontAwesomeIcon icon={faChevronLeft} /> */}
                </button>
                <span> {counter} </span>
                {/* <span> {item.quantity} </span> */}
                <button onClick={increase}>
                    +
                    {/* <FontAwesomeIcon icon={faChevronRight} /> */}
                </button>
            </div>

        </div>
    )
}

export default Item;