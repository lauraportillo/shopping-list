const CurrentDate = () => {
  let showDate = new Date();
  let displayTodayDate = ('0' + showDate.getDate()).slice(-2) + '/' + ('0' + (showDate.getMonth() + 1)).slice(-2) + '/' + showDate.getFullYear();
  let displayTime = ('0' + showDate.getHours()).slice(-2) + ':' + ('0' + showDate.getMinutes()).slice(-2);

  return (
    <div className="date">
        {displayTodayDate} {displayTime}h
      </div>
  );
};

export default CurrentDate;
