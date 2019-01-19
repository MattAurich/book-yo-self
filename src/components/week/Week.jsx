import React from 'react';
import Day from '../day/Day';

const Week = (props) => {
  return (
    <div>
      <div>this is a week</div>
      <Day dbRef={props.dbRef}></Day>
    </div>
  )
}

export default Week;
