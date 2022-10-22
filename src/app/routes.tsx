import { Route, Switch } from 'react-router-dom'

import Home from 'pages'
import Guests from 'pages/guests'

function Routers() {
  return (
    <Switch>
      <Route path="/" exact render={() => <Home />} />
      <Route path="/guests" exact render={() => <Guests />} />
    </Switch>
  )
}

export default Routers
