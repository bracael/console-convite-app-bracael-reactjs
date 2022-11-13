import { Route, Switch } from 'react-router-dom'

import Home from 'pages'
import Guests from 'pages/guests'
import CreateFamily from 'pages/create_family'

function Routers() {
  return (
    <Switch>
      <Route path="/" exact render={() => <Home />} />
      <Route path="/guests" exact render={() => <Guests />} />
      <Route path="/create" exact render={() => <CreateFamily />} />
    </Switch>
  )
}

export default Routers
