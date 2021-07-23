import React from 'react';

function DisplayComponent(props) {
//   const h = () => {
//      if(props.time.h === 0){
//        return '';
//      }else {
//        return <span className="time">{(props.time.h >= 10)? props.time.h : "0"+ props.time.h} </span>;
//      }
//   }
  return (
    <div className="mainDiv">
       <span className="time">{(props.time.h >= 10)? props.time.h : "0"+ props.time.h} </span><b>Hr</b>&nbsp;:&nbsp;
        
       <span className="time">{(props.time.m >= 10)? props.time.m : "0"+ props.time.m} </span><b>M</b>&nbsp;:&nbsp;
       <span className="time">{(props.time.s >= 10)? props.time.s : "0"+ props.time.s} </span><b>S</b>&nbsp;:&nbsp;
       <span className="time">{(props.time.ms >= 10)? props.time.ms : "0"+ props.time.ms} </span><b>Ms</b>&nbsp;&nbsp;
    </div>
  );
}

export default DisplayComponent;