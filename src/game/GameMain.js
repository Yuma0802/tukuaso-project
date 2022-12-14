import { Component } from "react";
import { withRouter } from "react-router-dom";

import GameView from "./GameView";
import GameView2 from "./GameView2";
import GameView3 from "./GameView3";

class GameMain extends Component {
    constructor(props) {
        super(props);

        this.maxGameViewX = document.documentElement.clientWidth;
        this.maxGameViewY = document.documentElement.clientHeight;

        this.timeCountObj = null;

        this.state = {
            monkCoordinate: this.createRandomCoordinate(this.maxGameViewX, this.maxGameViewY),
            candleNum: 3,
            gameView: null
        }
    }

    /////////////////////////////////////
    //game script
    componentDidMount() {
        this.setGameView();
    }

    createRandomCoordinate(maxX, maxY) {
        let x = Math.floor( Math.random() * (maxX + 1 - 0) ) + 0;
        let y = Math.floor( Math.random() * (maxY + 1 - 0) ) + 0;
        return [x, y]
    }

    monkClickFn() {
        console.log('monk click');
        
        document.querySelector('#gameView').classList.add('open-success');

        setTimeout(function() {
            document.querySelector('#gameView').classList.remove('open-success');

            switch(this.props.match.params.lv) {
                case '1':
                    window.location.href = '/game/1/success'
                    break;
                case '2':
                    window.location.href = '/game/2/success'
                    break;
                case '3':
                    window.location.href = '/game/3/success'
                    break;
            }
        }.bind(this), 2000);
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
                switch(this.props.match.params.lv) {
                    case '1':
                        window.location.href = '/game/1/lost'
                        break;
                    case '2':
                        window.location.href = '/game/2/lost'
                        break;
                    case '3':
                        window.location.href = '/game/3/lost'
                        break;
                }
            }
        }.bind(this), 2000);
    }

    setGameView() {
        switch(this.props.match.params.lv) {
            case '1':
                return <GameView 
                            maxGameViewX={this.maxGameViewX} 
                            maxGameViewY={this.maxGameViewY} 
                            monkCoordinate={this.state.monkCoordinate} 
                            monkClickFn={this.monkClickFn.bind(this)} 
                            lostClickFn={this.lostClickFn.bind(this)} 
                            candleNum={this.state.candleNum}
                        />
                break;
            case '2':
                return <GameView2 
                            maxGameViewX={this.maxGameViewX} 
                            maxGameViewY={this.maxGameViewY} 
                            monkCoordinate={this.state.monkCoordinate} 
                            monkClickFn={this.monkClickFn.bind(this)} 
                            lostClickFn={this.lostClickFn.bind(this)} 
                            candleNum={this.state.candleNum}
                        />
                break;
            case '3':
                return <GameView3
                            maxGameViewX={this.maxGameViewX} 
                            maxGameViewY={this.maxGameViewY} 
                            monkCoordinate={this.state.monkCoordinate} 
                            monkClickFn={this.monkClickFn.bind(this)} 
                            lostClickFn={this.lostClickFn.bind(this)} 
                            candleNum={this.state.candleNum}
                        />
                break;
        }
    }
    /////////////////////////////////////

    render() {
        return(
            <>
                {this.setGameView()}
            </>
        );
    }
}
export default withRouter(GameMain)