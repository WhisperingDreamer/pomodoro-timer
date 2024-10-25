/* eslint-disable react/prop-types */

const Countdown = ({ timeLeft }) => {
    const timerNormilize = (timeLeft) => {
        let minutes = 0;
        let seconds = 0;
        if (timeLeft >= 60) {
            minutes = Math.floor(timeLeft / 60);
            seconds = timeLeft % 60;
        } else {
            minutes = 0;
            seconds = timeLeft;
        }
        if (minutes < 10) minutes = '0' + minutes;
        if (seconds < 10) seconds = '0' + seconds
        return `${minutes}:${seconds}`
    }

    return (
        <div className="countdown__wrapper">
            <h2 className="timer">{timerNormilize(timeLeft)}</h2>
        </div>
    )
}

export default Countdown;
