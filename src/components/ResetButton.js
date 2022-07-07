// React
import { IconTrash } from '@tabler/icons';
// Styles
import '../stylesheets/ResetButton.scss';

const ResetButton = (props) => {
  const handleReset = () => {
    props.handleReset();
  };

  return (
    <>
      <button className="resetBtn" onClick={handleReset} title='delete list'>
        <IconTrash color="#df4a64" size={20} stroke={1.5} />
      </button>
    </>
  );
};

export default ResetButton;
