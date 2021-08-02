import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Header/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";
import { GlobalStyle } from "./GlobalStyle";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/:movieId" exact component={Movie} />
        <Route path="/*" component={NotFound} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
