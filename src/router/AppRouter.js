import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import App from "../containers/App";
import TodoListDetails from "../components/TodoList/TodoListDetails";

export const history = createHistory();

const AppRouter = () => (
  <HashRouter history={history}>
    <Route exact path="/" component={App} />
    <Route path="/edit/:id" component={TodoListDetails} />
  </HashRouter>
);

export default AppRouter;
