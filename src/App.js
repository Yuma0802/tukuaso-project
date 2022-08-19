import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GameMain from './game/GameMain';
import TitlePage from './presentational/Organisms/TitlePage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'><TitlePage /></Route>
        <Route exact path='/game/:lv'><GameMain /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
