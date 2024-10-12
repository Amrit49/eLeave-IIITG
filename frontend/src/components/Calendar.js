import React from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calendar = () => {
    const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };
  return (
    <div>
      <h2> Select A Date</h2>
      <Calendar>
      onChange={onChange}
      value={date}
      </Calendar>
      <p>Selected Date: {date.toDateString()}</p>
    </div>
  )
}

export default Calendar;
