import React, {Component} from 'react';

class TimeSlot extends Component { 
   constructor(props){
      super(props);
      let TS_ID = (props.id + " " +Math.random());
      console.log("The TS is constructed ### "+TS_ID);

       console.log("constructor after once before state");
      this.state = {...props, "Active":false, "TS_ID": TS_ID};
      if(this.state.count === 0){
         this.state.componentDisable("Started Empty");
      }
     
   }
   componentDidMount() {
      console.log("\n\n   ComponentDidMount:::::  \n\n\n");
      this.firebase_onRef = this.props.dbRef.on("value",(snapshot) => {
         console.log(snapshot);
 
          let new_firebase_count = snapshot.val(); // returns just the count
         
          
          console.log(" The firebase count is "+ new_firebase_count);
          console.log("on(Value) ----- Before the if statement");
          if(new_firebase_count !== null){
             console.log("TIMESLOT: "+this.state.TS_ID+"  Original: "+this.state.count+" New: "+new_firebase_count);
             if(this.state.count !== new_firebase_count)
             {
                this.setState({count:new_firebase_count})
                console.log("Did the error happen after the timeslot_setState_on(value)");
                if(new_firebase_count === 0)
                {
                  console.log("Disabling the TS");
                  this.props.componentDisable("No More Slots");
                }
             }
          }
       });
       
   }
   componentWillMount(){

      console.log(" The TS will mount has been called");

   }
   componentWillUnmount(){

      let db = this.props.dbRef;
      console.log("The Timeslot has unmounted : "+this.state.TS_ID)
      db.off('value', this.firebase_onRef);
   }
   handleClick = () => { 
      let count = this.state.count;
      count --;
      
      console.log("The button was clicked on ### "+this.state.TS_ID + "  the count is "+count);
    
      console.log(this.props.dbRef);
      this.props.dbRef.set(count);
      this.props.handleClickParent();
   }
   render = () => {
      console.log("Count is ------ " + this.state.count);
      if(this.state.count > 0){
         return (<li>
               <button onClick={this.handleClick}> {this.props.id}, with a count of {this.state.count} available spots.</button>
            </li>) 
      }
      else {
         console.log(this.state.count);
         return (<li>
               <button disabled> {this.props.id}, with a count of {this.state.count} available spots.</button>
            </li>)
         }
   }
}

export default TimeSlot;
