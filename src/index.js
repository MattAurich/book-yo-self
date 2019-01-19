import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';
// To import the Demo object from App_Working.jsx
//import  Demo  from './components/App_Working';

// To import the Demo object from App.jsx
import Demo from './components/App';


import fire from './firebaseConnect';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';


    // Initialize Firebase
    /*
      var database_div = document.getElementById('database');
      var cls_dbRef = firebase.database().ref('classes');

      cls_dbRef.on('value',(snapshot) => database_div.innerText = JSON.stringify(snapshot.val()));

      cls_dbRef.set({className: "Javascript",weeks:15});

      var scheduler_div = document.getElementById("scheduler");
      var timeslots_dbRef = firebase.database().ref("TimeSlots");
      var timeslot_dbRef_date = timeslots_dbRef.child("2018-9-25");
      console.log(timeslots_dbRef);
      console.log(timeslot_dbRef_date);
      timeslots_dbRef.on("value", (snapshot)=> {scheduler_div.innerText  += JSON.stringify(snapshot.val()) 
        console.log(snapshot);
      });
      
      timeslot_dbRef_date.on("value", (snapshot)=> {
        //database_div.innerText = JSON.stringify(snapshot.val());
        let obj = snapshot.val();
        console.log("The key is: "+ snapshot.key)
        Object.keys(obj).forEach(k => console.log(`The key is ${k} and the value is ${obj[k]}`))
      });*/

 
let timeslotsChange = (snapshot) => {
    console.log(snapshot.val());
}

fire.database().ref('classes').child("className").on("value", (snapshot) => {
    
    console.log(snapshot); // DataSnapshot{...} 
    console.log(snapshot.val()); 
});
/*
fire.database().ref("TimeSlots").on("value", (snapshot) => {
    console.log("INDEX.JS::::Inside the TimeSlots");
    console.log(snapshot.val());
//timeslotsChange
});*/

/*
fire.database().ref("TimeSlots").child("2018-9-25").on("value", (snapshot)=> {
    console.log("INDEX.JS::::Inside the child 2018-9-25");
    console.log(snapshot); //DataSnapShot {...}
    console.log(snapshot.val()); // This returns  {10:00: 2, 11:00: 2, 8:00: 10, 9:00: 3}
    let snapObj = snapshot.val();
    //for (let obj in snapObj) {
        //  obj is the timeslot- 10:00 and snapObj[obj] is the count - 2
      //  console.log(obj);
       // console.log(snapObj[obj]);
    //}
    
});*/
/*
fire.database().ref("TimeSlots").child("2018-09-24").on("value", (snapshot)=> {
    console.log("INDEX.JS::::Inside the child 2018-09-24");
    console.log(snapshot); //DataSnapShot {...}
    console.log(snapshot.val()); // {10:00: 8, 11:00: 4, 12:00: 3, 1:00: 6, 2:00: 3, …}
    let snapObj = snapshot.val();
    //for( let obj in snapObj) {
    //    console.log(obj);
    //    console.log(snapObj[obj]); }
    
});*/
let testUpdate = {"8:00":4,"9:00":4,"10:00":4,"11:00":4,"12:00":4,"1:00":4,"2:00":4,"3:00":4};

fire.database().ref("TimeSlots").child("2018-09-24").update(testUpdate);



ReactDOM.render(<Demo dbRef={fire} />, document.getElementById('root'));
//ReactDOM.render(<App dbRef={fire}/>, document.getElementById('root'));
//ReactDOM.render(<App dbRef={fire}/>, document.getElementById('root1'));
 


console.log(fire);
