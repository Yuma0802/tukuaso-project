import { Component } from "react";
import { withRouter } from "react-router-dom";

import styled from 'styled-components';

import Monk from "./component/Monk";

let View;

class GameView extends Component {
    constructor(props) {
        super(props);

        View = styled.section`
            position: relative;
            width: ${props.maxGameViewX}px;
            height: ${props.maxGameViewY}
        `;
    }

    render() {
        return(
            <View>
                <p>game</p>
                <Monk top={this.props.monkCoordinate[0]} left={this.props.monkCoordinate[1]} />
            </View>
        );
    }
}
export default withRouter(GameView)