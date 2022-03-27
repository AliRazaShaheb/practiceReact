import {
  Component,
  createRef,
  useEffect,
  useReducer,
  useRef,
  useState,
  forwardRef
} from "react";
import { useDispatch, useSelector } from "react-redux";
import ArzApp from "./ArzApp";
import CalculatorApp from "./components/calculator/CalculatorApp";
import UserFormValidation from "./components/form/UserFormValidation";
import FormBlue from "./components/formBlue/FormBLue";
import MyPromises from "./components/mypromises/MyPromises";
import PaginationApp from "./components/pagination/PaginationApp";
import SearchApp from "./components/searchbar/SearchApp";
import Stopwatch from "./components/stopwatch/Stopwatch";
import TodoApp from "./components/todo/TodoApp";
import { setShowName, useReduxState } from "./feature/nameSlice";
import { CounterValue, decrement, increment } from "./redux/counterSlice";

import "./styles.css";
console.clear();
export default function App() {
  return (
    <div className="App">
      <div>
        {/* <PrintMyNameFunc name="Ali Raza" /> */}
        {/* <PrintMyNameFuncRedux name="Ali Raza" /> */}
        {/* <PrintMyNameClass name="Ali Raza" /> */}
        {/* <PrintMyNameFuncReducer name="Ali Raza" /> */}
        {/* <PrintMyNameFuncReducer2 name="Abdul Mateen" /> */}
        {/* <MyComp name="Ali Raza" /> */}
        {/* <MyComp1 name="Ali Raza" /> */}
        {/* <DeleteComp /> */}
        {/* <LifeCycleMethodsInFunc /> */}
        {/* <Counter /> */}
        {/* <Counter1 /> */}
        {/* <SideMenu /> */}
        {/* <Stopwatch /> */}
        {/* <MyPromises /> */}
        {/* <TodoApp /> */}
        {/* <SearchApp /> */}
        {/* <CalculatorApp /> pending work */}
        {/* <UserFormValidation /> feild level validation pending work */}
        {/* <PaginationApp /> */}
        {/*********** practice *********/}
        {/* <ArzApp /> */}

        <FormBlue />
      </div>
    </div>
  );
}

// componnt function approach
const PrintMyNameFunc = ({ name }) => {
  const [nameChange, setNameChange] = useState(false);

  const handleChange = () => {
    setNameChange(!nameChange);
  };

  return (
    <>
      <button onClick={handleChange}>showname</button>
      {nameChange && <h1>{name}</h1>}
    </>
  );
};

// component class approach

class PrintMyNameClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameChange: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState(
      // (prev)=>({...prev, nameChange:!prev.nameChange})
      { ...this.state, nameChange: !this.state.nameChange }
    );
  }

  render() {
    return (
      <>
        <button onClick={this.handleChange}>showname</button>
        {this.state.nameChange && <h1>{this.props.name}</h1>}
      </>
    );
  }
}

// componnt function approach - use reducer
const PrintMyNameFuncReducer = ({ name }) => {
  const initialState = {
    nameChange: false
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "change":
        return { nameChange: !state.nameChange };
      default:
        break;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = () => {
    dispatch({ type: "change" });
  };

  return (
    <>
      <button onClick={handleChange}>showname</button>
      {state.nameChange && <h1>{name}</h1>}
    </>
  );
};

// // componnt function approach - use reducer option-II
const PrintMyNameFuncReducer2 = ({ name }) => {
  const initialState = {
    showName: false
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "change":
        return { ...state, showName: !state.showName };

      default:
        break;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <button onClick={() => dispatch({ type: "change" })}>showname</button>
      {state.showName && <h1>{name}</h1>}
    </>
  );
};

// react.CreateRef() class component ;
// getting acces dom node directly

class MyComp extends Component {
  constructor(props) {
    super(props);
    this.ref = createRef();
    this.state = {
      data: ""
    };
    this.eHandle = this.eHandle.bind(this);
  }

  eHandle(e) {
    // console.log(e.target.parentNode);
    console.log(this.ref.current.value);
    this.setState({ data: this.ref.current.value });
  }
  render() {
    return (
      // getting acces dom node directly
      <div>
        hello {this.props.name}
        <br />
        {/* getting access input value */}
        {/* onchange also work */}
        <input type="text" ref={this.ref} />
        <button onClick={this.eHandle}>show me Event</button>
      </div>
    );
  }
}

// ref functional approach

function MyComp1({ name }) {
  const myref = useRef();
  const myref2 = useRef();
  const eHandle = () => {
    console.log(myref.current);
    console.log(myref2.current);
  };
  return (
    <div
      style={{
        marginTop: "2rem"
      }}
      // ref={myref} working fine
    >
      {name}
      <br />
      <input type="text" />
      <button onClick={eHandle}>showRef</button>
      <H1compo ref={myref} />
      <H2compo ref={myref2} />
    </div>
  );
}

// forward ref example
// only one ref for each component

const H1compo = forwardRef((props, myref) => {
  return <h1 ref={myref}>Ali Raza</h1>;
});
const H2compo = forwardRef((props, myref2) => {
  return <h1 ref={myref2}>Shamsher</h1>;
});

// example life cycle of component before delete - class approach

class DeleteComp extends Component {
  constructor() {
    super();
    this.state = {
      delteComp: false
    };
    this.handlDelete = this.handlDelete.bind(this);
    // alert("component at constructor");
  }
  static getDerivedStateFromProps(prevProps, prevState) {
    // alert("getDerivedStateFromProps");
  }

  handlDelete() {
    this.setState({ ...this.state, delteComp: !this.state.delteComp });
  }

  componentDidMount() {
    // alert("component just mounted");
  }

  getSnapshotBeforeUpdate() {
    // alert("component will be deleted getSnapshotBeforeUpdate");
  }

  componentDidUpdate() {
    // alert("component did updated");
  }

  render() {
    return (
      <div>
        {this.state.delteComp && <ComponentWillunmountd />}
        <p>header will delete</p>
        <button onClick={this.handlDelete}>Delete header Comp</button>
      </div>
    );
  }
}

class ComponentWillunmountd extends Component {
  componentWillUnmount() {
    alert("component will unmount");
  }
  render() {
    return <h1>Header</h1>;
  }
}

// component life cycle usehook method

function LifeCycleMethodsInFunc() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    alert("component did updated");
    return () => {
      alert("component unmounted");
    };
  }, [show]);

  return (
    <div>
      {show && <h1>header in Functional component</h1>}
      <p>header will be deleted</p>
      <p>life cycle example with useEffect</p>
      <button onClick={handleShow}>{show ? "Delete" : "Show"} Header</button>
    </div>
  );
}

const Counter = () => {
  const [windowWidth, setWinddowWidth] = useState(window.innerWidth);
  const [count, setCount] = useState(0);

  const handleWindowWidth = () => {
    setWinddowWidth(window.innerWidth);
  };

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setCount((prev) => {
      if (prev === 0) {
        return 0;
      }
      return prev - 1;
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowWidth);
  }, []);

  return (
    <div>
      <h3>Counter</h3>
      <h1>{count}</h1>
      <div
        style={{
          margin: "auto",
          width: "100px",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
      </div>
      <h3>{windowWidth}</h3>
    </div>
  );
};
const Counter1 = () => {
  const count = CounterValue();

  const dispatch = useDispatch();

  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleIncrement = () => {
    dispatch(increment());
  };

  return (
    <div>
      <h3>Counter</h3>
      <h1>{count}</h1>
      <div
        style={{
          margin: "auto",
          width: "100px",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

const PrintMyNameFuncRedux = ({ name }) => {
  const nameChange = useSelector((state) => state.nameReducer.showName);
  const dispatch = useDispatch();

  const handleShow = () => {
    dispatch(setShowName());
  };
  return (
    <>
      <button onClick={handleShow}>showname</button>
      {nameChange && <h1>{name}</h1>}
    </>
  );
};

// recursion code sandbox menu collapse and open

const SideMenu = () => {
  const [folderData, setFolderData] = useState([
    {
      name: "Files",
      isFolder: true,
      items: [
        {
          name: "public",
          isFolder: true,
          items: [
            {
              name: "index.html",
              isFolder: false
            }
          ]
        },
        {
          name: "src",
          isFolder: true,
          items: [
            {
              //item no.1
              name: "components",
              isFolder: true,
              items: [
                {
                  //item no.1
                  name: "mypromises",
                  isFolder: true,
                  items: [
                    {
                      //item no.1
                      name: "MyPromises.jsx",
                      isFolder: false
                    }
                  ]
                },
                {
                  //item no.2
                  name: "stopwatch",
                  isFolder: true,
                  items: [
                    {
                      //item no.1
                      name: "Stopwatch.jsx",
                      isFolder: false
                    },
                    {
                      //item no.2
                      name: "style.css",
                      isFolder: false
                    }
                  ]
                }
              ]
            },
            {
              //item no.2
              name: "feature",
              isFolder: true,
              items: [
                {
                  //item no.1
                  name: "nameSlice.js",
                  isFolder: false
                },
                {
                  //item no.2
                  name: "store.js",
                  isFolder: false
                }
              ]
            },
            {
              //item no.3
              name: "redux",
              isFolder: true,
              items: [
                {
                  //item no.1
                  name: "counterSlice.js",
                  isFolder: false
                },
                {
                  //item no.2
                  name: "store.js",
                  isFolder: false
                }
              ]
            },
            {
              //item no.4
              name: "App.js",
              isFolder: false
            },
            {
              //item no.5
              name: "index.js",
              isFolder: false
            },
            {
              //item no.6
              name: "styles.css",
              isFolder: false
            }
          ]
        }
      ]
    }
  ]);

  return (
    <div>
      {folderData.map((folder) => {
        return <Folder item={folder} key={folder.name} />;
      })}
    </div>
  );
};

const Folder = ({ item }) => {
  const [displayItem, setDisplayItem] = useState(false);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          cursor: "pointer"
        }}
      >
        <div
          style={{
            marginRight: "1rem"
          }}
        >
          {item.isFolder ? "📁" : "🗄️"}
        </div>
        <p onClick={() => setDisplayItem(!displayItem)}>{item.name}</p>
      </div>
      <div
        style={{
          display: displayItem ? "block" : "none",
          paddingLeft: "1rem"
        }}
      >
        {item.isFolder &&
          item.items.map((c) => <Folder item={c} key={c.name} />)}
      </div>
    </>
  );
};
