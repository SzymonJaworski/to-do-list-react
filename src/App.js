import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./Features/Tasks/TasksPage";
import TaskPage from "./Features/Tasks/TaskPage";
import AuthorPage from "./Features/Tasks/AuthorPage";
import { Navigation } from "./Navigation";
import { Container } from "./GlobalStyle.js";

const App = () => (
  <HashRouter>
    <Navigation />
    <Container> { }
      <Switch>
        <Route path="/zadania/:id">
          <TaskPage />
        </Route>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/autor">
          <AuthorPage />
        </Route>
        <Route path="/">
          <Redirect to="/zadania" />
        </Route>
      </Switch>
    </Container>
  </HashRouter>
);

export default App;