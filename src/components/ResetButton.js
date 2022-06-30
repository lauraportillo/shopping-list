// Styles
import '../stylesheets/ResetButton.scss';

const ResetButton = (props) => {
  const handleReset = () => {
    props.handleReset();
  };

  return (
    <>
      <button className="resetBtn" onClick={handleReset}>
        <i className="far fa-trash-alt resetBtn__icon"></i>
      </button>
    </>
  );
};

export default ResetButton;
