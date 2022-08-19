import { Component } from "react";
import { withRouter } from "react-router-dom";

import styled from 'styled-components';

import Monk from "./component/Monk";
import MenuBar from "./component/MenuBar";
import TextBar from "./component/TextBar";

let View;

class GameView extends Component {
    constructor(props) {
        super(props);

        View = styled.section`
            position: relative;
            // width: ${props.maxGameViewX}px;
            // height: ${props.maxGameViewY}px;
            // background-color: red;
        `;
    }

    render() {
        return(
            <View>
                <MenuBar time={this.props.time} />
                {/* <Monk top={this.props.monkCoordinate[0]} left={this.props.monkCoordinate[1]} /> */}
                <h1>!</h1>
                <h1>!</h1>
                <h1>!</h1>
                <h1>!</h1>
                <h1>!</h1>
                <h1>!</h1>
                <h1>!</h1>
                <h1>!</h1>
                <h1>!</h1>
                <h1>!</h1>
                <TextBar text="僧を見つけよ" />
            </View>
        );
    }
}
export default withRouter(GameView)