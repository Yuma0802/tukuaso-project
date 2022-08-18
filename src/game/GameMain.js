import { Component } from "react";
import { withRouter } from "react-router-dom";

import GameView from "./GameView";

class GameMain extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                <GameView />
            </>
        );
    }
}
export default withRouter(GameMain)