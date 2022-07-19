// React
import React from 'react';
import Swal from 'sweetalert2'
import { IconTrash } from '@tabler/icons';
// Styles
import '../stylesheets/ResetButton.scss';

const ResetButton = (props) => {

  const handleReset = () => {
    props.handleReset();
  };
  const showAlert = () => {
    Swal.fire({
      title: 'Delete list',
      text: 'Sure about this?',
      icon: 'warning',
      showDenyButton: true,
      denyButtonText: 'No',
      denyButtonColor: '#bababa',
      confirmButtonText: 'Yes',
      confirmButtonColor: '#df4a64'
    }).then((result) => {
      if (result.isConfirmed) {
        handleReset();
        Swal.fire({
          text: 'Shoping list deleted',
          icon: 'success'
        })
      }
    })

  }



  return (
    <>
      <button className="resetBtn" onClick={() => showAlert()} title='delete list'>
        <IconTrash color="#df4a64" size={20} stroke={1.5} />
      </button>
    </>
  );
};

export default ResetButton;
