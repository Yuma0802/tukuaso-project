import { Component } from "react";
import { withRouter } from "react-router-dom";

import GameView from "./GameView";

class GameMain extends Component {
    constructor(props) {
        super(props);

        this.maxGameViewX = 500;
        this.maxGameViewY = 500;

        this.state = {
            monkCoordinate: this.createRandomCoordinate(this.maxGameViewX, this.maxGameViewY)
        }
    }

    /////////////////////////////////////
    //game script
    // componentDidMount() {
    //     this.setMonkCoordinate();
    // }


    createRandomCoordinate(maxX, maxY) {
        let x = Math.floor( Math.random() * (maxX + 1 - 0) ) + 0;
        let y = Math.floor( Math.random() * (maxY + 1 - 0) ) + 0;
        return [x, y]
    }


    /////////////////////////////////////

    render() {
        return(
            <>
                <GameView maxGameViewX={this.maxGameViewX} maxGameViewY={this.maxGameViewY} monkCoordinate={this.state.monkCoordinate} />
            </>
        );
    }
}
export default withRouter(GameMain)