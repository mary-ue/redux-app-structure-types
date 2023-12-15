import ReactDOM from "react-dom";
import { configureStore } from "./store2/index";
import { Root } from "./Root";

const store = configureStore();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Root store={store} />,
  rootElement
);
