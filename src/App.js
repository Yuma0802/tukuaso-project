import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GameMain from './game/GameMain';
import TitlePage from './Presentational/Organisms/TitlePage';
import Explanation from './Presentational/Organisms/Explanation';
import ClearOrOutTemplate from './Presentational/Organisms/ClearOrOutTemplate';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'><TitlePage /></Route>
        <Route exact path='/explanation'><Explanation /></Route>
        <Route exact path='/game/:lv'><GameMain /></Route>
        <Route exact path='/game/1/success'><ClearOrOutTemplate num={0} text="つぎへ" toPath="/game/2" /></Route>
        <Route exact path='/game/1/lost'><ClearOrOutTemplate num={1} text="やりなおす" toPath="/game/1" /></Route>
        <Route exact path='/game/2/success'><ClearOrOutTemplate num={2} text="つぎへ" toPath="/game/3" /></Route>
        <Route exact path='/game/2/lost'><ClearOrOutTemplate num={3} text="やりなおす" toPath="/game/2" /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
