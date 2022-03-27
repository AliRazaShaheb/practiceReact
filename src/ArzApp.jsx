import { Component, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRedux } from "./redux2/counterSlice";
import { increment, decrement } from "./reduxtwo/slice";
console.clear();
const ArzApp = () => {
  return (
    <div>
      {/* <CounterFC /> */}
      {/* <CounterClass /> */}
      {/* <CounterFCReducer /> */}
      {/* <CounterRedux /> */}
      <CounterRedux2 />
    </div>
  );
};

export default ArzApp;

const wrapper = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  padding: "1rem",
  background: "rgba(0,255,0,0.1)",
  borderRadius: "0.3rem",
  color: "green"
};
const textP = {
  fontSize: "1.5rem",
  fontWeight: "bold"
};
const stbtn = {
  width: "2rem",
  height: "2rem",
  border: "1px solid green",
  background: "rgba(0,255,0,0.15)",
  fontSize: "1rem",
  color: "green"
};

const CounterUI = ({
  counter,
  incrementC,
  decrementC,
  val,
  setVal,
  addIncrement
}) => {
  return (
    <>
      <div style={wrapper}>
        <button style={stbtn} onClick={incrementC}>
          +
        </button>
        <p style={textP}>{counter}</p>
        <button style={stbtn} onClick={decrementC}>
          -
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <input
          type="text"
          style={{ width: "2rem" }}
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <button onClick={addIncrement}>Add increment</button>
      </div>
    </>
  );
};

// copy of ui
class CounterUIClass extends Component {
  render() {
    return (
      <div style={wrapper}>
        <button style={stbtn} onClick={this.props.incrementC}>
          +
        </button>
        <p style={textP}>{this.props.counter}</p>
        <button style={stbtn} onClick={this.props.decrementC}>
          -
        </button>
      </div>
    );
  }
}

// 1 - function based
const CounterFC = () => {
  const [counter, setCounter] = useState(0);

  const incrementC = () => {
    setCounter((prev) => prev + 1);
  };

  const decrementC = () => {
    setCounter((prev) => {
      return prev === 0 ? 0 : prev - 1;
    });
  };

  return (
    <CounterUI
      counter={counter}
      incrementC={incrementC}
      decrementC={decrementC}
    />
  );
};

// 2 - classbased based

class CounterClass extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }
  incrementC = () => {
    console.log("+");
    this.setState((prev) => {
      return {
        ...prev,
        counter: prev.counter + 1
      };
    });
  };
  decrementC = () => {
    this.setState((prev) => {
      return {
        ...prev,
        counter: prev.counter === 0 ? 0 : prev.counter - 1
      };
    });
  };

  render() {
    return (
      <CounterUI
        counter={this.state.counter}
        incrementC={this.incrementC}
        decrementC={this.decrementC}
      />
    );
  }
}

// 3 - useReducer

const CounterFCReducer = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state === 0 ? 0 : state - 1;
      default:
        return state;
    }
  };
  const incrementC = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrementC = () => {
    dispatch({ type: "DECREMENT" });
  };

  const [counter, dispatch] = useReducer(reducer, 0);

  return (
    <CounterUI
      counter={counter}
      incrementC={incrementC}
      decrementC={decrementC}
    />
  );
};

// 4 - redux-toolkit
const CounterRedux = () => {
  // use selector for selecting state object such as initial state
  const counter = useSelector((state) => state.arz.counter);
  const dispatch = useDispatch();

  return (
    <CounterUI
      counter={counter}
      incrementC={() => dispatch(increment())}
      decrementC={() => dispatch(decrement())}
    />
  );
};

// 5- redux-toolkittwo - 2

const CounterRedux2 = () => {
  const [val, setVal] = useState(0);
  const [selector, dispatch, increment, decrement, plusIncrement] = useRedux();
  return (
    <CounterUI
      counter={selector.counter}
      incrementC={() => dispatch(increment())}
      decrementC={() => dispatch(decrement())}
      val={val}
      setVal={setVal}
      addIncrement={() => dispatch(plusIncrement(val))}
    />
  );
};
