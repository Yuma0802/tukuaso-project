import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Root from './container/Root';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'><Root /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
