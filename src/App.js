import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

//import Root from './container/Root';
import GameMain from './game/GameMain';
import TitlePage from './Presentational/Organisms/TitlePage';

function App() {
  return (
    // <BrowserRouter>
    //   <Switch>
    //     <Route exact path='/'><Root /></Route>
    //     <Route exact path='/game'><GameMain /></Route>
    //   </Switch>
    // </BrowserRouter>
    <>
      <TitlePage />
    </>
  );
}

export default App;
