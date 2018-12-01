import React from 'react';

const BookAppointment = (props) => {
  return (
    <div>
      <div>
        <label htmlFor="blah">Start Time:</label>
        <input type="text" id="blah" value="2018-09-24_5:15"/>
      </div>
      <div>
        <label htmlFor="blah2">Span:</label>
        <input type="text" id="blah2" value="2" />
      </div>
      <div>
        <button onClick={()=>{
            props.bookAppointment(
              {
                startTime: '2018-09-24_5:15',
                span: '2',
              }
            )
        }}>Book Yo Self</button>
      </div>
    </div>
  )
}

export default BookAppointment;
