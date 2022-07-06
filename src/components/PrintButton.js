// React
import { IconPrinter } from '@tabler/icons';
// Styles
import '../stylesheets/PrintButton.scss';

function PrintButton() {
    return (
        <button className="resetBtn">
            <IconPrinter color="#df4a64" size={20} stroke={1.5} />
        </button>  
    )
}

export default PrintButton