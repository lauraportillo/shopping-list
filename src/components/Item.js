// React
import { useCounter } from '../hooks/useCounter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
// Components
// import ResetButton from './ResetButton';
// Styles
import '../stylesheets/Item.scss';
import '../stylesheets/ResetButton.scss';

function Item({ item, index, toggleComplete }) {
    const { counter, increase, decrement, reset } = useCounter(1);


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

            {/* <ResetButton reset={reset} /> ESTO SOLO SIRVE PARA RESETEAR EL COUNTER Y LO QUE YO QUIERO ES BORRAR EL ELEMENTO */}
            <button className="resetBtn" onClick={reset}>
                <i className="far fa-trash-alt resetBtn__icon"></i>
            </button>

        </div>
    )
}

export default Item;