import { Component } from "react";
import { withRouter } from "react-router-dom";

import styled from 'styled-components';

import MenuBar from "./component/MenuBar";

import lv1BackImg from "./../img/lv1Back.jpeg";
import lv1MonkImg from "./../img/lv1Monk.png";

let View;

const GameBackImg = styled.img`
    width: 100%;
    height: 100%;
`;
const Monk = styled.img`
    position: absolute;
    top: 385px;
    left: 180px;
    width: 300px;
`;

class GameView extends Component {
    constructor(props) {
        super(props);

        View = styled.section`
            position: relative;
            // width: ${props.maxGameViewX}px;
            // height: ${props.maxGameViewY}px;
            width: 1320px;
            height: 860px;
            background-color: red;
            margin: 0 auto;
        `;
    }

    render() {
        return(
            <View>
                <MenuBar time={this.props.time} lvName="権律師" />
                <GameBackImg src={lv1BackImg} />
                <Monk src={lv1MonkImg} />
            </View>
        );
    }
}
export default withRouter(GameView)