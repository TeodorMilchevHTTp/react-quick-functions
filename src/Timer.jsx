import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'

function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let timer = null
        if(isActive){
            timer = setInterval(() => {
                if(seconds < 59){
                    setSeconds(seconds+1)
                }else{
                    setSeconds(0)
                    setMinutes(minutes+1)
                }
            }, 1000)
            return () => clearInterval(timer)
        }
    })

    const resetTimer = () => {
        setMinutes(0)
        setSeconds(0)
    }

    return(
        <>
        <span>Minutes: {minutes}</span>
        <span>Seconds: {seconds}</span>
        <div>
        <button onClick={() => setIsActive(true)}>Start Timer</button>
        <button onClick={() => setIsActive(false)}>Stop Timer</button>
        <button onClick={resetTimer}>Reset Timer</button>
        </div>
        </>
    )
}
 
export default Timer ;