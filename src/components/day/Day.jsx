import React from 'react';
import TimeSlot from '../timeslot/TimeSlot';
import Appointment from '../appointment/Appointment';

const Day = () => {
  return (
    <div>
      <div>this is a day, and it contains:</div>
      <TimeSlot></TimeSlot>
      <Appointment></Appointment>
    </div>
  )
}

export default Day;
