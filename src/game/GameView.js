import { Component } from "react";
import { withRouter } from "react-router-dom";

class GameView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                <p>game</p>
            </>
        );
    }
}
export default withRouter(GameView)