import { Component } from "react";
import { withRouter } from "react-router-dom";

import styled from 'styled-components';

import MenuBar from "./component/MenuBar";

import lv2BackImg from "./../img/lv2Back.jpeg";
import lv2MonkImg from "./../img/lv2Monk.jpeg";

let View;

const GameBackImg = styled.img`
    width: 100%;
    height: 100%;
`;
const Monk = styled.div`
    position: absolute;
    top: 355px;
    left: 60px;
    width: 60px;
    height: 260px;
    // background-color: red;
`;
const BackImageLost = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    opacity: .6;
    background-color: black;
`;
const LostMs = styled.h3`
    position: absolute;
    color: white;
    font-size: 56px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Shippori Mincho', serif;
`;
const BackImageSuccess = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    opacity: .6;
    background-color: white;
`;
const SuccessMs = styled.h3`
    position: absolute;
    color: black;
    font-size: 66px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Shippori Mincho', serif;
`;

class GameView2 extends Component {
    constructor(props) {
        super(props);

        View = styled.section`
            position: relative;
            width: 1320px;
            height: 860px;
            background-color: red;
            margin: 0 auto;
        `;
    }

    render() {
        return(
            <View id="gameView">
                <MenuBar lvName="権中僧正" candleNum={this.props.candleNum} />
                <GameBackImg src={lv2BackImg} onClick={this.props.lostClickFn} />
                <Monk onClick={this.props.monkClickFn} />
                <BackImageLost className="lost-view"></BackImageLost>
                <LostMs className="lost-view">いや違う、僧じゃないー</LostMs>
                <BackImageSuccess className="success-view"></BackImageSuccess>
                <SuccessMs className="success-view">僧だ！</SuccessMs>
            </View>
        );
    }
}
export default withRouter(GameView2);