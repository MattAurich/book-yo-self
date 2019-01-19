import React from 'react';
import Week from '../week/Week';

const Month = (props) => {

  return (
    <div>
      <div>this is a month</div>
      <Week dbRef={props.dbRef}></Week>
    </div>
  );
}

export default Month;
