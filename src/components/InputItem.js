// React
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
// Styles
import '../stylesheets/InputItem.scss';

function InputItem({ handleAddItem, inputValue, setInputValue }) {


    return (
        <div className='containerInputItem'>
            <input
                className='containerInputItem__input'
                type="text"
                placeholder='Add an item...'
                value={inputValue}
                onChange={(ev) => setInputValue(ev.target.value)} />

            <FontAwesomeIcon icon={faPlus} onClick={handleAddItem} />
        </div>
    )
}

export default InputItem;