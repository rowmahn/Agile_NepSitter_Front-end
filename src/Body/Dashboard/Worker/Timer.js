import React, {useState} from 'react';
import DisplayComponent from './DisplayComponent';
import BtnComponent from './BtnComponent';
import '../../../style/timer.css'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'



export default function Timer(props) {
  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
 const hid = props.match.params.hid
  
  var hr = 0;
  const [config,setConfig]=useState({ headers:{'Authorization':'Bearer ' + localStorage.getItem('token')}})
  
  const start = () => {
    run();

    setStatus(1);
    setInterv(setInterval(run, 10));
  };
  const savework=(hr)=>{
    axios.post('http://localhost:90/'+hr+'/'+hid)
    .then(result=>{
      console.log(result)
    })
    .catch(err=>{
      console.log(err)
    })
  }
  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const run = () => {
    
    if(updatedM === 60){
      updatedH++;
      hr++;
      console.log(hr)
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
    return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH,hr});
  };

  const stop = (e) => {
    e.preventDefault()
    
    clearInterval(interv);
    setStatus(2);
    axios.post(`http://localhost:90/timer/`+updatedH+`/`+hid)
    
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

