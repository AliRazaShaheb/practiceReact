const { useState, useRef } = require("react");
import "./style.css";

const Stopwatch = () => {
  const [{ minutes, seconds }, setMinsec] = useState({
    minutes: 0,
    seconds: 0
  });
  const [error, setError] = useState(false);
  const [intr, setIntr] = useState();

  const minuteRef = useRef();
  const secondRef = useRef();

  const handleSet = (e) => {
    e.preventDefault();
    const getMinutes = (value) => {
      const min = Number(value);
      const minutes = min.toFixed();
      if (minutes > 59) {
        setError(true);
        setTimeout(() => setError(false), 2000);
        return 59;
      }
      return minutes;
    };

    const getSeconds = (value) => {
      const seconds = Number(value).toFixed();
      if (seconds > 59) {
        setError(true);
        setTimeout(() => setError(false), 2000);
        return 59;
      }
      return seconds;
    };

    setMinsec((prev) => ({
      ...prev,
      minutes: getMinutes(minuteRef.current.value),
      seconds: getSeconds(secondRef.current.value)
    }));

    minuteRef.current.value = "";
    secondRef.current.value = "";
  };

  const handleStart = () => {
    setIntr(
      setInterval(() => {
        setMinsec((prev) => ({ ...prev, seconds: prev.seconds - 1 }));
      }, 1000)
    );
  };
  const handleStop = () => {
    clearInterval(intr);
  };

  return (
    <div className="stopwatch-container">
      <div className="stopwatch-container">
        <p>
          {minutes} : <span>{seconds}</span>
        </p>
        {error && (
          <p style={{ color: "yellow", fontSize: "0.7rem" }}>
            input must be below 59
          </p>
        )}
        <form action="#" onSubmit={handleSet}>
          <input type="text" ref={minuteRef} placeholder="minutes" />
          <input type="text" ref={secondRef} placeholder="seconds" />
          <button>set</button>
        </form>
      </div>
      <div>
        <button onClick={() => handleStart()}>start</button>
        <button onClick={() => handleStop()}>stop</button>
      </div>
    </div>
  );
};

export default Stopwatch;
