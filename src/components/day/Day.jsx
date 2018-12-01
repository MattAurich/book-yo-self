import React, {Component} from 'react';
import TimeSlot from '../timeslot/TimeSlot';
import BookAppointment from '../appointment/BookAppointment';

class Day extends Component {
  constructor(props) {
    super(props);

    var event = new Date();

    this.state = {
      date: event.toLocaleDateString('en-US'),
      config: {
        increment: 15,
      },
      timeSlots: [
        {
          'id': '2018-09-24_5:15',
          'count': 1,
          'appointments': [],
        },
        {
          'id': '2018-09-24_5:30',
          'count': 2,
          'appointments': [],
        },
        {
          'id': '2018-09-24_5:45',
          'count': 1,
          'appointments': [],
        },
        {
          'id': '2018-09-24_6:00',
          'count': 0,
          'appointments': ['123'],
        },
        {
          'id': '2018-09-24_6:15',
          'count': 0,
          'appointments': ['123'],
        },
        {
          'id': '2018-09-24_6:30',
          'count': 1,
          'appointments': [],
        },
        {
          'id': '2018-09-24_6:45',
          'count': 1,
          'appointments': [],
        },
        {
          'id': '2018-09-24_7:00',
          'count': 0,
          'appointments': [],
        },
      ],
      appointments: [
        {
          'id': '123',
          'timeSlotsRefs': ['2018-09-24_6:00', '2018-09-24_6:15'],
          'span': 2,
        }
      ],
    }
  }

  bookAppointment(stuff) {
    console.log(stuff, 'so many things')
  }

  render() {
    return (
      <div>
        <div>This is a day, and it contains:</div>
        <ol>
          {this.state.timeSlots.map(timeSlot => 
            (
              <TimeSlot key={timeSlot.id} id={timeSlot.id} count={timeSlot.count} appointments={timeSlot.appointments}></TimeSlot>
            )
          )}
        </ol>
        <BookAppointment bookAppointment={this.bookAppointment}></BookAppointment>
      </div>
    )
  }
}

export default Day;
