import {forwardRef, useImperativeHandle,useRef} from 'react';


const ResultPop = forwardRef (function ResultPop ({onReset, TargetTime, remainingTime } , ref) {
    const dailog = useRef();
    const userLost = remainingTime <=0;
    const sec = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (TargetTime * 1000))*100);
    useImperativeHandle (ref , () =>{
        return{
            open () {
                dailog.current.showModal();
            }
        };
    });

    return (
    <dialog  ref = {dailog} className="result-modal" onClose={onReset}>
       {userLost &&  <h2>
            You Lost
        </h2>}
        {!userLost && <h2>Your Score : {score}</h2>}
        <p>
            The Target time was <strong>{TargetTime} seconds.</strong>
        </p>
        <p>
            You stopped the timer with <strong>{sec} seconds left</strong> 
        </p>
        <form method="dailog" onSubmit={onReset}>

            <button>Close</button>

        </form>
    </dialog>

    )
})


export default ResultPop;