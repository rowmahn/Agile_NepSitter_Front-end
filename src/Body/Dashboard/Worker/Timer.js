import React, {useState} from 'react';
import DisplayComponent from './DisplayComponent';
import BtnComponent from './BtnComponent';
import '../../../style/timer.css'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const {REACT_APP_URL}=process.env
export default function Timer(props) {
  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
 const hid = props.match.params.hid
  
  const start = () => {
    run();

    setStatus(1);
    setInterv(setInterval(run, 10));
  };
  
  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const run = () => {
    
    if(updatedM === 2){
      updatedH++;
    
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
    if(updatedH===1&&updatedM===45&&updatedS===1){
      toast("You have completed 1:45 minute work !!")
    }
    updatedMs++;
    return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
  };

  const stop = (e) => {
    e.preventDefault()
    
    clearInterval(interv);
    setStatus(2);
    axios.post(`${REACT_APP_URL}/timer/`+updatedH+`/`+hid)
    
        .then(response=>{
            //console.log(response.data)
            
            alert("Your time has been tracked!")

               
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



  return (
    <div className="main-section">
     <div className="clock-holder">
          <div className="stopwatch">
          <ToastContainer></ToastContainer>
               <DisplayComponent time={time}/>
               <BtnComponent status={status}  reset={reset} stop={stop} start={start}/>
              
          </div>
     </div>
    </div>
  );
}

