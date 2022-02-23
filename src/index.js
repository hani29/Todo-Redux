import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import AppRouter from "./router/AppRouter";

const store = configureStore();

const Todo = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

ReactDOM.render(<Todo />, document.getElementById("root"));
