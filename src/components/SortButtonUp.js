// React
import { IconArrowsUp } from '@tabler/icons';
// Styles
import '../stylesheets/SortButton.scss';

function SortButtonUp({ handleSortUp }) {
    return (
        <button className="sortBtn" onClick={() => handleSortUp()}>
            <IconArrowsUp color="#df4a64" size={20} stroke={1.5} />
        </button>
    )
}

export default SortButtonUp;