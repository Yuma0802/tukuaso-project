import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GameMain from './game/GameMain';
//import TitlePage from './presentational/Organisms/TitlePage';
import ClearOrOutTemplate from './Presentational/Organisms/ClearOrOutTemplate';

function App() {
  return (
    // <BrowserRouter>
    //   <Switch>
    //     <Route exact path='/'><TitlePage /></Route>
    //     <Route exact path='/game/:lv'><GameMain /></Route>
    //   </Switch>
    // </BrowserRouter>

    <ClearOrOutTemplate num={2} text="つぎへ"/>
  );
}

export default App;
