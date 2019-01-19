import React, {Component} from 'react';
import TimeSlot from '../timeslot/TimeSlot';
import BookAppointment from '../appointment/BookAppointment';
import MakeDayAppointment from '../appointment/MakeDayAppointment';

class Day extends Component {
  constructor(props) {
    super(props);
    
    var event = new Date();
    this.day = "2018-09-24";
    let TSdbref = this.props.dbRef.database().ref('TimeSlots/2018-09-24');
    this.state = {
      id: this.props.id,
      TimeSlotdbRef : TSdbref,
        mkDayAppt : false,
        date: event.toLocaleDateString('en-US'),
        meta: {
          increment: 15,
          purgatory: [{
            'id': '2018-09-24_06:00',
            'expiration': '2018-12-08T22:02:02.133Z'
          }, {
            'id': '2018-09-24_06:30',
            'expiration': '2018-12-08T22:05:21.579Z'
          }]
        },
        timeSlots: {},

        disabledTimeSlots:[],

        appointments: {
          '2018-09-24_06:45': 2,
        },
    };
    TSdbref.once("value", (snapshot)=> {
      let sn_key = snapshot.key;
      
      
  
      let newTS = snapshot.val(); 
      console.log(newTS);
      
      this.setState({"timeSlots" : newTS});
    
    });



    
      console.log(" \n\n          the Day Constructor "+ (Date.now())+"\n\n");
  }
  componentDidMount(){
    console.log(this.state.id + " \n\n      the Day Component Did Mount "+ (Date.now())+"\n\n");
  }
  componentWillMount(){
   
    console.log(this.state.id + " \n\n      the Day Component Will Mount "+ (Date.now())+"\n\n");

    
    
  }
  componentWillUnmount(){
    console.log(this.state.id + "  The Day is unmounting "+ (Date.now())+"\n\n");
  }

  processTimeSlotsUpdate = (snapshot) => {
    console.log(snapshot.val());
  }

  getData = (details) => {

  }
  makeDayAppt = (details) => {
    //this.state
    console.log(this.state);
    console.log(details);
    let appt = this.state.mkDayAppt;
    if(!appt)
      this.setState({mkDayAppt: details});
    else
      this.setState({mkDayAppt: false});
  }
  putToPurgatory2 = (details) => {
    console.log("putToPurgatory2")
    console.log(details);

    let date = new Date(details.startDay);
    console.log(details.startTime)
    console.log(details.startTime.split(":"));
    date.setHours(...details.startTime.split(':'));
    for (var i = 0; i < details.span; i++) {
      let blah = new Date(date.setMinutes(date.getMinutes() + i * this.state.meta.increment))
      let currentHours = blah.getHours();
      if (currentHours < 10)  currentHours = '0'+currentHours;
      let currentMinutes = blah.getMinutes();
      if( currentMinutes < 10) currentMinutes = "0"+currentMinutes;

      let blah2 = String(currentHours + ':' + currentMinutes);
      console.log(blah2)
      //console.log(this.state.timeSlots[details.startDay][blah2]);
      console.log(this.state.timeSlots[details.startDay])
    }
  }
  putToPurgatory= (details) => {
    console.log("PutToPurgatory")
    console.log(details);
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
  handleClick = (timeslot_id) => () => {
    console.log("Board: "+this.state.id +" ---> "+ timeslot_id + " was clicked");
  }
  disableComponent = (timeslot_id) => message => {
    
    //let [key, id] = timeslot_id.split("_");
    setTimeout(()=>{
      let timeslots = this.state.timeSlots;
      let disabledTimeSlots = this.state.disabledTimeSlots;
      console.log(disabledTimeSlots);
      //console.log(key+" *****  "+id);
      disabledTimeSlots.push(timeslot_id);
      delete timeslots[timeslot_id];
      this.setState({timeSlots:timeslots, disabledTimeSlots});
      //this.setState({timeSlots:timeslots});
    }, 5000)

  }
  

  render = () => {
    console.log(this.state);
    console.log(this.state.id + " \n\n      the Day Render  "+ (Date.now())+"\n\n");
      console.log(this.state.timeSlots);
    let renderTimeSlots =  (
        <ol>
           {Object.keys(this.state.timeSlots).map(slot => {
                console.log("Time slots should be rendering    ----  "+this.state.timeSlots[slot]);
                return (<TimeSlot handleClickParent={this.handleClick(slot)} componentDisable={this.disableComponent(slot)} dbRef={this.state.TimeSlotdbRef.child(slot)} key={slot} id={slot} count={this.state.timeSlots[slot]} />);
            })
          }
        </ol>
    );
    let bkAppt = (
        <BookAppointment putToPurgatory2={ this.putToPurgatory2} putToPurgatory={this.putToPurgatory} makeDayAppt={this.makeDayAppt}></BookAppointment>
    );
   
    let makeAppt = this.state.mkDayAppt ? (<MakeDayAppointment data={this.state.mkDayAppt} />)
                                        : null;
    return (<div>
      {renderTimeSlots}
      {/*   {bkAppt}  */}
      {/*    {makeAppt} */}
    </div>) ;
    
    
  }
}

export default Day;
