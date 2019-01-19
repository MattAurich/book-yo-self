import React,{ Component } from 'react';

class BookAppointment extends Component {
  constructor(props) 
  {
    super(props);
    this.props = props;
    this.handleClick = this.handleClick.bind(this)
  }
   handleClick(){}

  render() {
    return (
      <div>
        <div>
            <label htmlFor="start_date">Start Date: </label>
            <input type="text" id="start_date" ref = {(node)=>{this.sd_ref=node;}} defaultValue={(() => {
              let date= new Date();
              return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
            })()} />
        </div>
        <div>
            <label htmlFor="start_time">Start Time:</label>
            <input type="text" id="start_time" ref={(node) => {this.st_ref = node;}} defaultValue={(() => {
              let date= new Date();
              
              return `${date.getHours()}:${
                  ((minutes)=>{
                  if (minutes.toString().length > 1) {
                    return minutes;
                  }
                  else {
                    return "0"+minutes;
                  }
                  })(date.getMinutes()) 
                }`;
            })()}/>
        </div>
        
        <div>
            <label htmlFor="span">Span:</label>
            <input type="text" id="span" defaultValue="1" ref={(node) => {this.incr_ref = node;}}/>
        </div>
        <div>
          <button onClick={()=>{

            this.props.putToPurgatory(
              {
                startDay: '2018-09-24',
                startTime: "06:15",
                span: 2,
              }
            );
          }}>Put To Purgatory!</button>
          <button onClick={()=>{

            this.props.putToPurgatory2({
                startDay: '2018-09-24',
                //startDay:this.sd_ref.value,
                startTime: this.st_ref.value,
                span: this.incr_ref.value,
            })
          }}>Put To Purgatory2!</button>
        
          <button onClick= {() => {
            this.props.makeDayAppt({
              startDay: "2018-09-24",
              //startDay: this.sd_ref.value,
              startTime: "08:00",
              //startTime:this.st_ref.value,
              span: this.incr_ref.value,
            })
        }}>Make Day Appointment</button>
      </div>
    </div>
  );
}
}

export default BookAppointment;
