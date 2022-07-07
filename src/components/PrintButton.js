// React
import { IconPrinter } from '@tabler/icons';
// Styles
import '../stylesheets/PrintButton.scss';

function PrintButton({ handlePrint }) {
    return (
        <button className="printBtn" onClick={handlePrint} title='print list'>
            <IconPrinter color="#df4a64" size={20} stroke={1.5} />
        </button>  
    )
}

export default PrintButton