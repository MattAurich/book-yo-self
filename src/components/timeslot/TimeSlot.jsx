import React from 'react';

const TimeSlot = (props) => {
   return <li>{props.id}, with a count of {props.count} available spots.</li>
}

export default TimeSlot;
