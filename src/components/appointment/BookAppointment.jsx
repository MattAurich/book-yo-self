import React from 'react';

const BookAppointment = (props) => {
  return (
    <div>
      <div>
        <label htmlFor="blah">Start Time:</label>
        <input type="text" id="blah" defaultValue="2018-09-24_05:15"/>
      </div>
      <div>
        <label htmlFor="blah2">Span:</label>
        <input type="text" id="blah2" defaultValue="2" />
      </div>
      <div>
        <button onClick={()=>{
            props.putToPurgatory(
              {
                startDay: '2018-09-24',
                startTime: '05:30',
                span: 2,
              }
            )
        }}>Put To Purgatory!</button>
      </div>
    </div>
  )
}

export default BookAppointment;
