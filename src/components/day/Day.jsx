import React, {Component} from 'react';
import TimeSlot from '../timeslot/TimeSlot';
import BookAppointment from '../appointment/BookAppointment';

class Day extends Component {
  constructor(props) {
    super(props);

    var event = new Date();

    this.putToPurgatory = this.putToPurgatory.bind(this);
    this.state = {
      date: event.toLocaleDateString('en-US'),
      meta: {
        defaultIncrement: 15,
        purgatory: [{
          'id': '2018-09-24_06:00',
          'expiration': '2018-12-08T22:02:02.133Z'
        }, {
          'id': '2018-09-24_06:30',
          'expiration': '2018-12-08T22:05:21.579Z'
        }]
      },
      timeSlots: {
        '2018-09-24': {
          '05:15': 1,
          '05:30': 2,
          '05:45': 1,
          '06:00': 0,
          '06:15': 0,
          '06:30': 1,
          '06:45': 1,
          '07:00': 0,
        }
      },
      appointments: {
        '2018-09-24_06:45': {
          span: 2,
          increment: 15,
        },
      },
    }
  }

  putToPurgatory(details) {
    let date = new Date(details.startDay);
    date.setHours(...details.startTime.split(':'));
    for (var i = 0; i < details.span; i++) {
      let blah = new Date(date.setMinutes(date.getMinutes() + i * this.state.meta.increment))
      let currentHours = blah.getHours();
      if (currentHours < 10)  currentHours = '0'+currentHours;
      let blah2 = String(currentHours + ':' + blah.getMinutes());
      console.log(blah2)
      console.log(this.state.timeSlots[details.startDay][blah2]);
    }
  }

  render() {
    return (
      <div>
        <div>This is a day, and it contains:</div>
        <ol>
          {Object.keys(this.state.timeSlots).map(day => {
            return Object.keys(this.state.timeSlots[day]).map(slot => {
              return (<TimeSlot key={day + slot} id={day + slot} count={this.state.timeSlots[day][slot]}></TimeSlot>)
            });
          })}
        </ol>
        <BookAppointment putToPurgatory={this.putToPurgatory}></BookAppointment>
      </div>
    )
  }
}

export default Day;
