import React, { useState , useRef } from 'react';

export const  Timer = () => {
    const [hour, setHour] = useState(0)
    const [minute, setMinute] = useState(0)
    const [second, setSecond] = useState(0)
    const timeout=useRef(null)

    const restart = () => {
        clearTimeout(timeout.current)
        setMinute(0)
        setSecond(0)
        setHour(0)
    }
    timeout.current=setTimeout(() => {
        if (second==59){
            setSecond(0) 
            setMinute(minute + 1)
        }
        else setSecond(second + 1) 
        if (minute==59){
            setMinute(0)
            setHour(hour+1)
        }
    }, 1000) 
 

    return (
        // <div style={{ margin: '10%', backgroundColor: 'pink' ,backgroundSize: '10px',backgroundImage:`url(${img2.jpg})`}} >
        <div style={{ margin: '10%', backgroundColor: 'pink'}}>   
            <h1> Timer</h1>
            <h3> {hour}:{minute}:{second}</h3>

            <button onClick ={restart}>restart</button>
            <br />
          
        </div>
    )
}