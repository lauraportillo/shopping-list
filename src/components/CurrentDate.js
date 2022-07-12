const CurrentDate = () => {
  let showDate = new Date();
  // let displayTodayDate = ('0' + showDate.getDate()).slice(-2) + '/' + ('0' + (showDate.getMonth() + 1)).slice(-2) + '/' + showDate.getFullYear();
  let displayTodayDate = (showDate.getFullYear() + '/' + ('0' + (showDate.getMonth() + 1)).slice(-2) + '/' + ('0' + showDate.getDate()).slice(-2));

  return (
    <div className="date">
      {displayTodayDate} 
      </div>
  );
};

export default CurrentDate;
