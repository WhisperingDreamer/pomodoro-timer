import { useState, useEffect } from 'react'
import Countdown from './Countdown/Countdown';

const Main = () => {
    const [intervalId, setIntervalId] = useState(null);
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(2700);
    const [timeLeft, setTimeLeft] = useState(time);

    const [minutes, setMinutes] = useState(45);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        setTimeLeft(time);
    }, [time]);

    const setToTime = () => {
        setTime(parseInt(minutes ? minutes : 0) * 60 + parseInt(seconds ? seconds : 0));
    }

    const isStarted = intervalId !== null;
    
    const handleStartStopClick = () => {
        if (isStarted) {
            clearInterval(intervalId);
            setIntervalId(null);
            setIsRunning(false);
        } else {
            setIsRunning(true);
            const newIntervalId = setInterval(() => {
                setTimeLeft(prevTimeLeft => {
                    const newTimeLeft = prevTimeLeft - 1;
                    if (newTimeLeft >= 0) {
                        return newTimeLeft;
                    }
                    setTimeLeft(time);
                });
            }, 1000);
            setIntervalId(newIntervalId);
        }
    };

    const handleResetButtonClick = () => {
        clearInterval(intervalId)
        setTimeLeft(time);
        setIsRunning(false);
    };

    return (
        <div className="main">
            <div className="main__wrapper">
                <div className="main__header">
                    <h1>Pomodoro timer</h1>
                </div>
                <Countdown timeLeft={timeLeft} />
                <form>
                    <input className="input-minutes" type="text" placeholder="MM" name='minutes' onInput={e => setMinutes(e.target.value)} />
                    <h3 style={{display: 'inline'}}>:</h3>
                    <input className="input-seconds" type="text" placeholder="SS" name='seconds' onInput={e => setSeconds(e.target.value)} />
                    <input type="button" value={'SET'} onClick={() => setToTime()}></input>
                </form>
                <div className="main__buttons">
                    <button
                        onClick={() => {handleStartStopClick()}}>{isRunning ? 'STOP' : 'START'}
                    </button>
                    <input type="button" value={'RESET'} onClick={() => {handleResetButtonClick()}}></input>
                </div>
            </div>
        </div>
    )
}

export default Main;
