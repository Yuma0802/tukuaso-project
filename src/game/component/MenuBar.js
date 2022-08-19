import styled from 'styled-components';

import candleImg from './../../img/candle.png';
import translationImg from './../../img/translationIcone.jpeg';
import arrowImg from './../../img/arrow.svg';

const Bar = styled.div`
    padding: 0 40px;
    width: 100%;
    height: 75px;
    background-color: #333333;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Flex = styled.div`
    display: flex;
    align-items: center;
`;

const Time = styled.h3`
    margin-right: 15px;
    color: white;
    font-size: 28px;
`;

const ImgCandle = styled.img`
    margin: 8px;
    width: 28px;
`

const BackHome = styled.h3`
    color: white;
    font-size: 16px;
    font-family: 'Shippori Mincho', serif;
`;

const TranslationImg = styled.img`
    margin: 0 0 0 20px;
    width: 36px;
`;

const Arrow = styled.img`
    margin: 0 10px;
    width: 28px;
`;

const Lv = styled.h3`
    font-size: 20px;
    color: white;
    font-family: 'Shippori Mincho', serif;
`;

const Span = styled.span`
    color: #52a6e1;
`;

const MenuBar = (props) => {
    let candleArr = [];
    for(let i = 0; i < props.candleNum; i++) {
        candleArr.push(<ImgCandle src={candleImg} />)
    }

    return(
        <Bar>
            <Flex>
                <Time>{props.time}</Time>
                {candleArr}
            </Flex>

            <Lv>Lv.<Span>{props.lvName}</Span></Lv>
            
            <Flex>
                <Arrow src={arrowImg} />
                <BackHome>ホームに戻る</BackHome>
                {/* <TranslationImg src={translationImg} /> */}
            </Flex>
        </Bar>
    );
}
export default MenuBar;