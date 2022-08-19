import { Component } from "react";
import { withRouter } from "react-router-dom";

import GameView from "./GameView";

class GameMain extends Component {
    constructor(props) {
        super(props);

        this.maxGameViewX = document.documentElement.clientWidth;
        this.maxGameViewY = document.documentElement.clientHeight;

        this.timeCountObj = null;

        this.state = {
            monkCoordinate: this.createRandomCoordinate(this.maxGameViewX, this.maxGameViewY),
            time: 30,
            candleNum: 3
        }
    }

    /////////////////////////////////////
    //game script
    componentDidMount() {
        this.timeCount();
    }


    createRandomCoordinate(maxX, maxY) {
        let x = Math.floor( Math.random() * (maxX + 1 - 0) ) + 0;
        let y = Math.floor( Math.random() * (maxY + 1 - 0) ) + 0;
        return [x, y]
    }

    setTime() {
        this.setState({
            time: this.state.time - 1
        });
        
        if(this.state.time == 0) {
            console.log('end');
            clearInterval(this.timeCountObj);
        }
    }

    timeCount() {
        this.timeCountObj = setInterval(this.setTime.bind(this) ,1000);
    }

    monkClickFn() {
        console.log('monk click');
        
        document.querySelector('#gameView').classList.add('open-success');

        //リダイレクト
    }
    lostClickFn() {
        console.log('lost click');

        document.querySelector('#gameView').classList.add('open-lost');

        this.setState({
            candleNum: this.state.candleNum - 1
        });

        setTimeout(function() {
            document.querySelector('#gameView').classList.remove('open-lost');

            if(this.state.candleNum == 0) {
                console.log('game over');
                //リダイレクト
            }
        }.bind(this), 2000);
    }


    /////////////////////////////////////

    render() {
        return(
            <>
                <GameView 
                    maxGameViewX={this.maxGameViewX} 
                    maxGameViewY={this.maxGameViewY} 
                    monkCoordinate={this.state.monkCoordinate} 
                    time={this.state.time} 
                    monkClickFn={this.monkClickFn} 
                    lostClickFn={this.lostClickFn.bind(this)} 
                    candleNum={this.state.candleNum}
                />
            </>
        );
    }
}
export default withRouter(GameMain)