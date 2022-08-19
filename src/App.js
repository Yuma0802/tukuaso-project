import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GameMain from './game/GameMain';
//import TitlePage from './presentational/Organisms/TitlePage';
import CrearOrOutTemplate from './Presentational/Organisms/CrearOrOutTemplate';

function App() {
  return (
    // <BrowserRouter>
    //   <Switch>
    //     <Route exact path='/'><TitlePage /></Route>
    //     <Route exact path='/game/:lv'><GameMain /></Route>
    //   </Switch>
    // </BrowserRouter>

    <CrearOrOutTemplate num={3} text="やりなおす"/>
  );
}

export default App;
