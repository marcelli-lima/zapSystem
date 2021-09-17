import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Formulario from "../pages/Formulario"
import Home from "../pages/Home"
import Mensagens from "../pages/Mensagens"


const Routes = () => {
  return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/mensagens">
          <Mensagens />
        </Route>

        <Route path="/formulario">
          <Formulario />
        </Route>
      </Switch>

  )

}

export default Routes