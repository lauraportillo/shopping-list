// React
import React from 'react';
// import swal from 'sweetalert';
import { IconTrash } from '@tabler/icons';
// Styles
import '../stylesheets/ResetButton.scss';

const ResetButton = (props) => {
  const handleReset = () => {
    props.handleReset();
  };

  // const showAlert = () => {
  //   swal({
  //     title: 'Delete list',
  //     text: 'Sure about this?',
  //     icon: 'warning',
  //     buttons: ['No', 'Yes']
  //   }).then(response => {
  //     if (response) {
  //       handleReset();
  //       swal({
  //         text: 'Shoping list deleted',
  //         icon: 'success'
  //       })
  //     }
  //   })
  // }

  return (
    <>
      <button className="resetBtn" onClick={handleReset} title='delete list'>
        <IconTrash color="#df4a64" size={20} stroke={1.5} />
      </button>
    </>
  );
};

export default ResetButton;
