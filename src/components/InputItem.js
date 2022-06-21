// React
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
// Styles
import '../stylesheets/InputItem.scss';

function InputItem() {
    return (
        <div className='containerInputItem'>
            <input className='add-item-input' placeholder='Add an item...' />
            <FontAwesomeIcon icon={faPlus} />

            {/* <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} className='add-item-input' placeholder='Add an item...' />
            <FontAwesomeIcon icon={faPlus} onClick={() => handleAddButtonClick()} /> */}
        </div>
    )
}

export default InputItem;