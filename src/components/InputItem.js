// React
import { IconPlus } from '@tabler/icons';
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
                maxLength="15"
                onChange={(ev) => setInputValue(ev.target.value)} />

            <div className='containerInputItem__icon' title='add item'>
                <IconPlus size={20} color="black" onClick={handleAddItem} />
            </div>
        </div>
    )
}

export default InputItem;