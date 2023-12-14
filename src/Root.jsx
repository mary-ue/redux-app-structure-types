import { Provider } from "react-redux";
import App from "./App";

export const Root = ({store, children}) => (
  <Provider store={store}>
    <App />
  </Provider>
)
