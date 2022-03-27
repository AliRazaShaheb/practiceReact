import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import { newStore2 } from "./redux2/store";
// import { newStore } from "./reduxtwo/store";
// import { store } from "./redux/store";
// import { store } from "./feature/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={newStore2}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
