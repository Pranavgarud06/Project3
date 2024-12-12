import { useState , useRef } from "react"
import ResultPop from "./ResultPop";

export default function TimerChallenge ({title, TargetTime }) {
    const timer = useRef();
    const dailog = useRef();
    const [timeRemaining, setTimeRemaining] = useState(TargetTime * 1000);
    const timerIsActive = timeRemaining > 0 && timeRemaining < TargetTime * 1000;

    if(timeRemaining <=0){
        clearInterval(timer.current);
        dailog.current.open();
    }

    function handleReset () {
        setTimeRemaining(TargetTime * 1000);
    }

    function startHandler () {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
        },10)
    }


    function stopHandler () {
        dailog.current.open();
        clearInterval(timer.current);
    }



    return(
    <>
     <ResultPop  ref = {dailog} TargetTime={TargetTime} remainingTime={timeRemaining} onReset={handleReset}/>
    <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
            {TargetTime} second{TargetTime > 1 ?'s' : ''}
            
        </p>
        <p>
        <button onClick={timerIsActive ? stopHandler : startHandler}>
            {timerIsActive ? 'STOP' : 'START'} CHALLANGE
        </button>

        </p>
        <p className={timerIsActive ? 'active' : undefined}>
            {timerIsActive ? 'Timer is running...' : 'Timer inactive'}
        </p>

    </section>

</>
    )
}