import React, {useState} from 'react';
import DisplayComponent from './DisplayComponent';
import BtnComponent from './BtnComponent';
import '../../../style/timer.css'
import axios from 'axios';



function Timer() {
  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  const [config,setConfig] = useState({headers:{'Authorization':'Bearer ' + localStorage.getItem('token')}})
  var hr = 0;
  // Not started = 0
  // started = 1
  // stopped = 2

  const start = () => {
    run();

    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;hr= time.h;

  const run = () => {
    
    if(updatedM === 60){
      updatedH++;
      hr++
      updatedM = 0;
    }
    if(updatedS === 60){
      updatedM++;
      updatedS = 0;
    }
    if(updatedMs === 100){
      updatedS++;
      
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH,hr:hr});
    
    
  };


  const stop = () => {
    clearInterval(interv);
    setStatus(2);
    //console.log(sec)
    
    axios.post("http://localhost:90/timer/"+hr,config)
    
        .then(response=>{
            //console.log(response.data)
            
            alert("Your time has been tracked")

               
        })
        .catch(err=>{
            console.log(err);
            
        })

  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0, s:0, m:0, h:0})
  };

  const resume = () => start();


  return (
    <div className="main-section">
     <div className="clock-holder">
          <div className="stopwatch">
               <DisplayComponent time={time}/>
               <BtnComponent status={status} resume={resume} reset={reset} stop={stop} start={start}/>
              
          </div>
     </div>
    </div>
  );
}

export default Timer;