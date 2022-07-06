// React
import { IconArrowsDownUp } from '@tabler/icons';
// Styles
import '../stylesheets/SortButton.scss';

function SortButton() {
    return (
        <button className="sortBtn">
            <IconArrowsDownUp color="#df4a64" size={20} stroke={1.5} />
        </button>

    )
}

export default SortButton;