import React from 'react';

const TimeSlot = (props) => {
   return <li>{props.id}, with a count of {props.count} available spots. Appointment with id(s) [ {props.appointments} ] are currently in this time slot.</li>
}

export default TimeSlot;
