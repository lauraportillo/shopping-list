// React
import { IconArrowsDown } from '@tabler/icons';
// Styles
import '../stylesheets/SortButton.scss';

function SortButtonDown({ handleSortDown }) {
    return (
        <button className="sortBtn" onClick={() => handleSortDown()} title='sort list from Z'>
            <IconArrowsDown color="#df4a64" size={20} stroke={1.5} />
        </button>
    )
}

export default SortButtonDown;