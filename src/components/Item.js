import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
// Styles
import '../stylesheets/Item.scss';

function Item({ item }) {
    return (
        <div className="containerItem">

            <div >
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
                <button>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <span> {item.quantity} </span>
                <button>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>

        </div>
    )
}

export default Item;