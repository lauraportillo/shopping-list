// React
import { IconArrowsDownUp } from '@tabler/icons';
// Styles
import '../stylesheets/SortButton.scss';

function SortButton(props) {
    const handleSort = () => {
        props.handleSort();
    };
    return (
        <button className="sortBtn" onClick={handleSort}>
            <IconArrowsDownUp color="#df4a64" size={20} stroke={1.5} />
        </button>

    )
}

export default SortButton;