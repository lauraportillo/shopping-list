const CurrentDate = () => {
  let showDate = new Date();
  let displayTodayDate = ('0' + showDate.getDate()).slice(-2) + '/' + ('0' + (showDate.getMonth() + 1)).slice(-2) + '/' + showDate.getFullYear();

  return (
    <div className="date">
      {displayTodayDate} 
      </div>
  );
};

export default CurrentDate;
